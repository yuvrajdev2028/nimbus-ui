# Contributing to Nimbus UI

Thank you for your interest in contributing to Nimbus UI! 🎉

This document provides guidelines for contributing to the project. Following these guidelines helps maintain consistency and makes the contribution process smoother for everyone.

---

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Reporting Bugs](#reporting-bugs)
- [Requesting Features](#requesting-features)

---

## 📜 Code of Conduct

Please be respectful and considerate in all interactions. We welcome contributors of all skill levels and backgrounds.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v20 or higher
- **npm**: v10 or higher
- **Angular CLI**: v21 or higher

### Setup

1. **Fork the repository** on GitHub

2. **Clone your fork**

   ```bash
   git clone https://github.com/YOUR_USERNAME/nimbus-ui.git
   cd nimbus-ui
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Run the demo app**

   ```bash
   ng serve demo-app
   ```

   Open `http://localhost:4200` to see the demo app.

5. **Build the library**

   ```bash
   ng build nimbus-ui
   ```

6. **Run tests**
   ```bash
   ng test nimbus-ui
   ```

---

## 🔄 Development Workflow

### Branch Naming

Use the following format: `type/description`

| Type       | Use Case                 | Example                  |
| ---------- | ------------------------ | ------------------------ |
| `feat`     | New feature or component | `feat/add-checkbox`      |
| `fix`      | Bug fix                  | `fix/button-focus-ring`  |
| `docs`     | Documentation only       | `docs/update-readme`     |
| `refactor` | Code refactor            | `refactor/button-styles` |
| `test`     | Adding tests             | `test/input-validation`  |

### Creating a New Component

1. Create a new folder under `projects/nimbus-ui/src/lib/`:

   ```
   projects/nimbus-ui/src/lib/checkbox/
   ├── checkbox.ts
   ├── checkbox.html
   ├── checkbox.scss
   └── checkbox.spec.ts
   ```

2. Export the component in `projects/nimbus-ui/src/public-api.ts`

3. Add a demo in the demo app at `projects/demo-app/`

4. Create a Storybook story (when available)

### Project Structure

```
nimbus-ui/
├── projects/
│   ├── nimbus-ui/        # The library
│   │   └── src/lib/      # Components live here
│   └── demo-app/         # Demo application
├── docs/                 # Documentation
└── .storybook/          # Storybook configuration
```

---

## ✍️ Commit Guidelines

We use [Conventional Commits](https://www.conventionalcommits.org/) for all commit messages.

### Format

```
type(scope): description

[optional body]

[optional footer]
```

### Examples

```bash
# New feature
feat(checkbox): add checkbox component with label support

# Bug fix
fix(input): correct placeholder color in dark mode

# Documentation
docs(readme): add installation instructions

# Breaking change
feat(button)!: rename variant 'default' to 'secondary'

BREAKING CHANGE: The 'default' variant has been renamed to 'secondary'.
Update all usages of variant="default" to variant="secondary".
```

### Types

| Type       | Description                  |
| ---------- | ---------------------------- |
| `feat`     | New feature                  |
| `fix`      | Bug fix                      |
| `docs`     | Documentation only           |
| `style`    | Code style (formatting)      |
| `refactor` | Code refactor                |
| `test`     | Tests                        |
| `chore`    | Build, tooling, dependencies |

See [VERSIONING.md](VERSIONING.md) for how commits affect version numbers.

---

## 🔃 Pull Request Process

### Before Submitting

1. **Create a branch** from `main` using the naming convention above
2. **Make your changes** following the coding guidelines
3. **Test your changes** – run `ng test nimbus-ui`
4. **Lint your code** – run `ng lint`
5. **Update documentation** if needed

### Submitting a PR

1. Push your branch to your fork
2. Open a Pull Request against `main`
3. Fill out the PR template with:
   - **What** – What does this PR do?
   - **Why** – Why is this change needed?
   - **How** – How was it implemented?
   - **Testing** – How was it tested?

### Review Process

- PRs require at least one approval before merging
- Address all review comments
- Keep PRs focused – one feature per PR

---

## 🐛 Reporting Bugs

When reporting a bug, please include:

1. **Description** – What happened?
2. **Expected behavior** – What should have happened?
3. **Steps to reproduce** – How can we recreate the issue?
4. **Environment**:
   - Angular version
   - Nimbus UI version
   - Browser and version
   - Operating system
5. **Screenshots** – If applicable

Use the [GitHub Issues](https://github.com/yuvrajdev2028/nimbus-ui/issues) page to report bugs.

---

## 💡 Requesting Features

Before implementing a new feature:

1. **Check existing issues** – It may already be planned
2. **Open a discussion** – Propose the feature in an issue first
3. **Wait for feedback** – Get approval before starting work

For new components, include:

- **Use case** – Why is this component needed?
- **API proposal** – What inputs/outputs should it have?
- **Examples** – Links to similar components in other libraries

---

## 🙏 Thank You!

Every contribution, no matter how small, helps make Nimbus UI better. We appreciate your time and effort!
