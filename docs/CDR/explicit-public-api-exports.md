# CDR: Explicit Exports in Public API

## Context

In `projects/nimbus-ui/src/public-api.ts`, we explicitly export specific files:

```typescript
export * from './lib/button/button';
export * from './lib/core/config';
```

Instead of using a single barrel file export like:

```typescript
export * from './lib/nimbus-ui';
```

## Decision

We chose to maintain an explicit list of exports in the public API entry point.

## Reasoning

### 1. Granular Control (The Gatekeeper Pattern)

`public-api.ts` acts as the strict gatekeeper for the library. By explicitly listing exports, we ensure that:

- **Internal Utilities remain Private**: Helper functions, test utilities, and internal services used across components are not accidentally exposed to the consumer.
- **Intentionality**: Every exposed symbol is a conscious decision.

### 2. Tree Shaking & Bundle Size

While modern bundlers are good at tree-shaking, explicit exports help tools (like Webpack, Esbuild, and Rollup) understand the dependency graph more clearly. Massive barrel files that re-export everything can sometimes lead to "side-effect" retention, where unused code is included in the final bundle because the bundler cannot prove it's safe to remove.

### 3. Refactoring Safety

This pattern decouples the **internal file structure** from the **external API surface**.

- We can move `button.ts` from `lib/button/` to `lib/components/atoms/button/` without breaking the user's import.
- We only need to update the path in `public-api.ts`. The user continues to import from `nimbus-ui`.

## Status

Accepted
