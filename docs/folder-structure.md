# Project Folder Structure

This document provides a detailed overview of the folder structure for the **Nimbus UI** project.

## Root Directory

The root directory contains configuration files for the entire Angular workspace and tooling.

- **`.angular/`**: Cache directory for the Angular CLI.
- **`.storybook/`**: Global Storybook configuration.
- **`.vscode/`**: Visual Studio Code workspace settings and extensions recommendations.
- **`dist/`**: The output directory where the built library is generated after running `ng build`.
- **`docs/`**: Project documentation (this folder).
- **`node_modules/`**: Contains all installed npm packages and dependencies.
- **`projects/`**: Contains the source code for the libraries and applications in this workspace.
- **`angular.json`**: The main configuration file for the Angular CLI workspace.
- **`eslint.config.js`**: Configuration for ESLint (linting).
- **`package.json`**: Defines the project dependencies, scripts, and metadata.
- **`tsconfig.json`**: The base TypeScript configuration file for the workspace.
- **`.editorconfig`**: Configuration for maintaining consistent coding styles across editors.
- **`.prettierrc`**: Configuration for Prettier code formatter.

## Projects Directory (`projects/`)

This directory houses the individual projects within the workspace. Currently, it contains the `nimbus-ui` library.

### `nimbus-ui/`

The main UI library project.

- **`.storybook/`**: Storybook configuration specific to the `nimbus-ui` library.
- **`src/`**: The source code for the library.
  - **`lib/`**: Contains the logic and templates for the library's components and services.
    - **`button/`**: Source files for the Button component (`.ts`, `.html`, `.scss`, `.spec.ts`).
    - **`input/`**: Source files for the Input component (`.ts`, `.html`, `.scss`, `.spec.ts`).
    - **`styles/`**: Global styles and design tokens.
      - **`_tokens.scss`**: SCSS variables for colors, typography, spacing, etc.
      - **`_reset.scss`**: Global CSS reset.
      - **`styles.scss`**: Main entry point for styles.
  - **`public-api.ts`**: The entry point for the library. Exports the components and modules that should be accessible to consumers.
- **`ng-package.json`**: Configuration for `ng-packagr`, defining how the library is packaged.
- **`package.json`**: The `package.json` specific to the library (defines peer dependencies, etc.).
- **`tsconfig.lib.json`**: TypeScript configuration for building the library.
- **`tsconfig.spec.json`**: TypeScript configuration for running tests.
