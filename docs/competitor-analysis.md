# UI Library Approaches: Market Analysis

This document analyzes how major UI libraries approach design, usage, and customization, highlighting their pros and cons to better position **Nimbus UI**.

## 1. Material UI (MUI) / Angular Material

**The "All-in-One Framework" Approach**

These libraries implement a strict design system (Google's Material Design). They provide a massive suite of components that look and behave consistently out of the box.

- **Architecture**: Monolithic or modular packages. heavily reliant on runtime styling or strict global CSS.
- **Usage**: `npm install` -> Import Module -> Use Component.
- **Pros**:
  - **Speed**: Extremely fast to build internal tools or MVPs.
  - **Completeness**: Has a component for everything (Datepickers, Data Tables, etc.).
  - **Stability**: Battle-tested, accessible, and reliable.
- **Cons**:
  - **The "Google Look"**: Hard to make it look _not_ like Material Design.
  - **Override Hell**: Customizing deep internal styles often requires `::ng-deep` or complex theme configuration objects.
  - **Bundle Size**: Can be heavy if tree-shaking isn't perfect.

## 2. Shadcn/ui (and Headless UI + Tailwind)

**The "Copy-Paste / Headless" Approach**

Not a library in the traditional sense. It provides code snippets that you copy into your project. It combines **Headless UI** (for logic/accessibility) with **Tailwind CSS** (for styling).

- **Architecture**: You own the code. Components live in _your_ `src/components` folder.
- **Usage**: CLI tool copies code into your project -> You edit it directly.
- **Pros**:
  - **Ultimate Control**: You can change _anything_ because the code is yours.
  - **Zero Bundle Bloat**: You only include what you use.
  - **Modern Aesthetics**: usually built on modern design trends (Inter font, clean lines).
- **Cons**:
  - **Maintenance**: You are responsible for updating the components. No `npm update` to fix a bug in the Button.
  - **Setup Friction**: Requires Tailwind CSS, specific config files, and understanding of the underlying headless library (e.g., Radix).
  - **Fragmentation**: As you modify components, they diverge from the source, making it hard to sync future updates.

## 3. Bootstrap (Classic)

**The "Global Stylesheet" Approach**

Relies heavily on a global CSS file that defines classes (`.btn`, `.btn-primary`). Components are often just HTML structures with specific classes.

- **Architecture**: Global CSS + optional JavaScript for interactivity.
- **Usage**: Import CSS globally -> Apply classes to HTML.
- **Pros**:
  - **Universal**: Works with any framework (Angular, React, plain HTML).
  - **Familiarity**: almost every dev knows `col-md-6`.
- **Cons**:
  - **Global Pollution**: CSS classes are global, leading to conflicts.
  - **Generic Look**: The "Bootstrap look" is very recognizable and dated.
  - **Not Type-Safe**: It's string-based programming.

## 4. The Nimbus UI Approach

**The "Zero-Config Component" Approach**

We aim for a hybrid sweet spot between the ease of **MUI** and the modern architecture of **Shadcn**.

- **Architecture**: Standalone Angular components with **SCSS Variable Fallbacks**.
- **Usage**: `npm install` -> `import { Button }`. Zero setup.
- **Comparison**:
  - **Vs. MUI**: We are easier to customize. By exposing CSS variables backed by SCSS fallbacks, you can theme globally _or_ locally without fighting specificity wars. We don't enforce a strict "Material" guideline.
  - **Vs. Shadcn**: We are a proper library. You get updates via `npm`. You don't have to maintain the complex accessibility logic yourself, but you still get a modern, premium look.
  - **Vs. Bootstrap**: We are fully encapsulated. No global scope pollution.

### Summary Table

| Feature           | Material UI / Angular Material        | Shadcn/ui                | Nimbus UI                    |
| :---------------- | :------------------------------------ | :----------------------- | :--------------------------- |
| **Type**          | Component Library                     | Code Collection          | Component Library            |
| **Setup**         | Moderate (Global styles often needed) | High (Tailwind + Config) | **Zero** (Drop-in)           |
| **Customization** | Hard (Theme objects / Overrides)      | Unlimited (Edit source)  | **High** (CSS Vars + Inputs) |
| **Maintenance**   | Easy (`npm update`)                   | Hard (Manual diffs)      | **Easy** (`npm update`)      |
| **Aesthetics**    | Strict Material Design                | Modern / Minimalist      | **Premium / Modern**         |
