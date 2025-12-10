# Core Dependencies Explained

This document explains the purpose of the core dependencies included in `package.json` and why they are essential for the Angular application and library.

## 1. zone.js

### What is it?

`zone.js` is a library that implements a "Zone" context for JavaScript execution. It essentially monkey-patches standard asynchronous browser APIs (like `setTimeout`, `setInterval`, `Promise`, and DOM events like `click` or `input`).

### Why is it needed?

Angular uses `zone.js` to implement its **Change Detection** mechanism automatically.

- **Execution Context**: It allows Angular to track asynchronous operations.
- **Auto-Update**: When an async operation completes (e.g., a button click handler finishes or data returns from an API), `zone.js` notifies Angular.
- **Trigger**: Angular then runs change detection to update the view (DOM) with any new data.

Without `zone.js`, you would have to manually tell Angular to check for changes (using `ChangeDetectorRef.detectChanges()`) after every single async event, which would be extremely tedious and error-prone.

> **Note**: Modern Angular is moving towards "Zoneless" applications using Signals, but `zone.js` remains the standard foundation for most existing Angular projects and libraries.

## 2. tslib

### What is it?

`tslib` is a runtime library for TypeScript that contains all of the TypeScript helper functions.

### Why is it needed?

It is used for **Bundle Size Optimization**.

When TypeScript compiles your code (transpiles TS to JS), it often needs to generate helper code to implement features that don't exist in older JavaScript versions or to handle decorators. Common helpers include:

- `__decorate`: For class and property decorators.
- `__awaiter` / `__generator`: For `async`/`await` support.
- `__extends`: For class inheritance.

**Without `tslib`**:
TypeScript would generate these helper functions inline at the top of _every single file_ that uses them. If you have 100 components using decorators, you would have 100 copies of the `__decorate` function in your final bundle.

**With `tslib`**:
TypeScript imports these helpers from the `tslib` package (`import { __decorate } from 'tslib'`). This ensures the helper code is included **only once** in your final bundle, significantly reducing the application size.
