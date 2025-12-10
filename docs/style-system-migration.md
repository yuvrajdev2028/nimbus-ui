# Style System Architecture & Debugging Report

This document outlines the issues encountered with the initial CSS implementation in `nimbus-ui`, the reasons behind them, and the architectural changes made to support a "zero-config" usage pattern.

## 1. Initial Issues

When running the `demo-app`, two main issues prevented styles from loading correctly:

### A. Component Encapsulation

**The Issue:** The `Button` component styles were written targeting the `.nui-btn` class directly.

```scss
// Old button.scss
.nui-btn { ... }
```

**Why it failed:** Angular uses `Emulated` view encapsulation by default. This means it adds unique attributes (like `_ngcontent-ng-c123`) to the component's HTML elements and scopes the CSS to those attributes. However, the host element (the `<button lib-button>` tag itself) is special. Styles inside the component that target the host element need to use the `:host` pseudo-selector. The original CSS was looking for a child element with class `.nui-btn`, or failing to match the host properly within the encapsulation scope.

**The Fix:** We changed the selector to target the host element explicitly combined with the class.

```scss
// New button.scss
:host.nui-btn { ... }
```

### B. Missing CSS Variables

**The Issue:** Components were relying entirely on CSS Custom Properties (variables) that were expected to be defined globally.

```scss
// Old button.scss
background-color: var(--nui-color-primary-600);
```

**Why it failed:** CSS variables like `--nui-color-primary-600` are not built-in; they must be defined somewhere in the DOM, typically on the `:root` element. In our library, these definitions were in `_tokens.scss`. However, the `demo-app` was **not importing** this file. As a result, the variables were undefined, and the browser treated them as invalid values, causing the buttons to appear unstyled (transparent/default).

## 2. The "Global Import" Requirement

In many UI libraries, users are required to import a global style file (e.g., `import 'library/styles.css'`) in their root `styles.scss` or `angular.json`.

**Why is this usually needed?**

1.  **CSS Variables**: To define the values for `--primary-color`, etc. on `:root`.
2.  **Reset/Normalize**: To ensure consistent browser behavior.
3.  **Global Fonts**: To load font families.

If a user skips this step, the library components often look broken because they depend on these external definitions.

## 3. The "Zero-Config" Solution

The goal was to allow a user to simply `import { Button }` and have it work _without_ needing to configure global styles first.

### The Refactoring

We split our single `_tokens.scss` file into two:

1.  **`_variables.scss`** (SCSS Variables):
    - Contains **only** SCSS variables (e.g., `$nui-color-primary-600: #4f46e5;`).
    - Does **not** output any CSS.
    - Safe to import in every component.

2.  **`_tokens.scss`** (CSS Variables):
    - Imports `_variables.scss`.
    - Outputs the `:root { ... }` block defining CSS variables.
    - Optional for the user to import if they want to theme the app.

### How it works now (Fallbacks)

We updated component styles to use **CSS Variable Fallbacks**.

**Previous Code (Broken without global import):**

```scss
// If --nui-color-primary-600 is undefined, this is invalid.
background-color: var(--nui-color-primary-600);
```

**Current Code (Works standalone):**

```scss
@import '../styles/variables'; // Imports $nui-color-primary-600

// If --nui-color-primary-600 is undefined, use the SCSS variable value (#4f46e5).
background-color: var(--nui-color-primary-600, #{$nui-color-primary-600});
```

### Why this is better

1.  **Zero Config**: The component is self-contained. It carries its own default values (the SCSS variables) compiled directly into its style sheet.
2.  **Themable**: If the user _does_ import global styles (or defines their own `--nui-color-primary-600` in their app), the CSS variable takes precedence over the fallback.
3.  **No Duplication**: Since `_variables.scss` only contains SCSS vars, importing it in every component doesn't bloat the final CSS with repeated `:root` blocks.

## Summary

| Feature           | Previous Approach                 | Current Approach                               |
| :---------------- | :-------------------------------- | :--------------------------------------------- |
| **Dependency**    | CSS Variables (`var(--name)`)     | CSS Vars + SCSS Fallbacks (`var(--name, val)`) |
| **Global Import** | **Mandatory** (Broken without it) | **Optional** (Works without it)                |
| **Theming**       | Supported via CSS Vars            | Supported via CSS Vars                         |
| **Setup**         | `npm i` + Add to `angular.json`   | `npm i` + Import Component                     |
