# CDR: Separation of SCSS Variables and CSS Tokens

## Context

Initially, our style system had a single file `_tokens.scss` that contained both:

1.  SCSS variable definitions (e.g., `$primary: blue;`)
2.  CSS Custom Property definitions on `:root` (e.g., `:root { --primary: #{$primary}; }`)

## Problem

We wanted components to be "zero-config" (usable without global setup), but we also wanted them to use CSS variables for theming.

- **Issue 1**: If a component imported `_tokens.scss` to access the SCSS variables (for fallbacks), it would inadvertently include the `:root` block in its encapsulated styles. This leads to code duplication (multiple `:root` blocks in the final CSS) and potential specificity issues.
- **Issue 2**: If a component relied _only_ on CSS variables (`var(--primary)`), it would look broken if the user didn't import the global stylesheet where those variables were defined.

## Decision

We decided to split the style definitions into two separate files:

1.  **`_variables.scss`**: Contains **only** SCSS variables. No CSS output.
2.  **`_tokens.scss`**: Imports `_variables.scss` and outputs the CSS Custom Properties on `:root`.

## Reasoning

### 1. Zero-Config Usage (Fallbacks)

Components can now import `_variables.scss` safely. This allows us to use the SCSS variable as a **fallback** for the CSS variable:

```scss
// component.scss
@import 'variables';
background: var(--nui-color-primary, #{$nui-color-primary});
```

- If the user imports global styles (`_tokens.scss`), `var(--nui-color-primary)` is defined and used.
- If the user _does not_ import global styles, the browser uses the fallback value (`#{$nui-color-primary}`), so the component still looks correct.

### 2. No Side Effects

Importing `_variables.scss` into a component's style file produces no CSS output on its own. It only provides values for the compiler. This ensures that our components are truly encapsulated and don't pollute the global scope or bloat the bundle with redundant global definitions.

### 3. Optional Theming

The `_tokens.scss` file becomes purely optional. It is only needed if the user wants to:

- Use the library's variables in their own application.
- Override the default theme globally.

## Status

Accepted
