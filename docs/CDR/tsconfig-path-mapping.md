# CDR: TSConfig Path Mapping to Source

## Context

In the root `tsconfig.json`, we mapped the library path to the source file:

```json
"paths": {
  "nimbus-ui": [
    "./projects/nimbus-ui/src/public-api.ts"
  ]
}
```

Instead of pointing to the compiled output:

```json
"paths": {
  "nimbus-ui": [
    "./dist/nimbus-ui"
  ]
}
```

## Decision

We chose to point path mappings to the TypeScript source code (`src/public-api.ts`) during development.

## Reasoning

### 1. Hot Reloading (DX)

Pointing to source enables **instant feedback**.

- **With Source**: When you modify a file in `projects/nimbus-ui`, the `demo-app` (running via `ng serve`) detects the file change and reloads immediately.
- **With Dist**: You would need to rebuild the library (`ng build nimbus-ui`) after every change for the `demo-app` to see the update. This introduces a significant delay (seconds to minutes) in the feedback loop.

### 2. Simplified Workflow

It removes the need for a parallel build process. Developers only need to run `ng serve demo-app`. They do not need to manage a separate terminal running `ng build --watch`.

### 3. Debugging

Debugging is significantly easier because the browser dev tools (and IDE debuggers) work directly with the original TypeScript source files. There is no intermediate source-map translation layer from `dist` artifacts, reducing the chance of source-map drift or mapping errors.

## Consequences

- **Production**: This mapping is only for the development environment. When the library is published to npm, consumers will use the compiled artifacts in `dist` (as defined in `package.json`).
- **Consistency**: We must ensure that the build process (ng-packagr) is run before publishing to verify that the library builds correctly in isolation, as `ng serve` might be more forgiving than the strict library compiler.

## Status

Accepted
