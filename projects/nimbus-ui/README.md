# Nimbus UI

A modern, accessible, and performant UI library for Angular.

## Installation

```bash
npm install nimbus-ui
```

## Usage

Import the `NimbusUiModule` (or individual components) in your Angular application.

```typescript
import { Button } from 'nimbus-ui';

@Component({
  imports: [Button],
  template: `<button lib-button variant="primary">Click me</button>`,
})
export class AppComponent {}
```

## Components

### Button

- Selector: `button[lib-button]`, `a[lib-button]`
- Inputs:
  - `variant`: 'primary' | 'secondary' | 'outline' | 'ghost'
  - `size`: 'sm' | 'md' | 'lg'
  - `disabled`: boolean

### Input

- Selector: `lib-input`
- Inputs:
  - `label`: string
  - `placeholder`: string
  - `error`: string
  - `type`: string
