# Nimbus UI

A modern, highly configurable Angular UI component library built for flexibility and ease of use.

[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE.md)
[![Angular](https://img.shields.io/badge/Angular-21-dd0031.svg)](https://angular.dev/)
[![npm version](https://img.shields.io/badge/npm-0.1.0-orange.svg)](https://www.npmjs.com/package/nimbus-ui)

---

## ✨ Features

- **🎨 Highly Configurable** – Customize CSS, behavior, and content through inputs and global configuration
- **📦 Minimal Overhead** – Import only what you need, no bloated dependencies
- **🎯 Angular-First** – Built specifically for Angular with full TypeScript support
- **🌙 Theming Ready** – CSS custom properties for easy theming and dark mode support
- **♿ Accessible** – WCAG-compliant components out of the box
- **📱 Responsive** – Mobile-first design that works on any screen size

---

## 📦 Installation

```bash
npm install nimbus-ui
```

---

## 🚀 Quick Start

### 1. Import the component

```typescript
import { NimButton } from 'nimbus-ui';

@Component({
  selector: 'app-root',
  imports: [NimButton],
  template: `<nim-button variant="primary">Click me</nim-button>`,
})
export class AppComponent {}
```

### 2. Add global styles (optional)

Import the base styles in your `styles.scss`:

```scss
@use 'nimbus-ui/styles' as nimbus;
```

---

## 🧩 Available Components

| Component | Selector         | Status     |
| --------- | ---------------- | ---------- |
| Button    | `<nim-button>`   | ✅ Ready   |
| Input     | `<nim-input>`    | ✅ Ready   |
| Checkbox  | `<nim-checkbox>` | 🚧 Planned |
| Modal     | `<nim-modal>`    | 🚧 Planned |
| Card      | `<nim-card>`     | 🚧 Planned |

See [v1_checklist.md](docs/v1_checklist.md) for the full roadmap.

---

## ⚙️ Global Configuration

Configure library-wide defaults using `provideNimbusConfig`:

```typescript
import { provideNimbusConfig } from 'nimbus-ui';

export const appConfig: ApplicationConfig = {
  providers: [
    provideNimbusConfig({
      button: {
        defaultVariant: 'primary',
        defaultSize: 'md',
      },
    }),
  ],
};
```

---

## 🎨 Theming

Nimbus UI uses CSS custom properties for theming. Override them in your global styles:

```css
:root {
  --nim-color-primary: #6366f1;
  --nim-color-primary-hover: #4f46e5;
  --nim-border-radius: 8px;
  --nim-font-family: 'Inter', sans-serif;
}
```

---

## 📚 Documentation

- [Component Checklist](docs/v1_checklist.md) – Track v1 progress
- [Release Tasks](docs/release_tasks.md) – Non-component release tasks
- [Versioning Strategy](VERSIONING.md) – How we version releases
- [Changelog](CHANGELOG.md) – What's changed in each version

---

## 🛠️ Development

```bash
# Clone the repo
git clone https://github.com/yuvrajdev2028/nimbus-ui.git
cd nimbus-ui

# Install dependencies
npm install

# Run the demo app
ng serve demo-app

# Build the library
ng build nimbus-ui

# Run tests
ng test nimbus-ui
```

---

## 📄 License

[MIT](LICENSE.md) © 2025 Yuvraj Pratap Singh
