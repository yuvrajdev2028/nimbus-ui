# Button Component

The `Button` component is a highly configurable primitive that supports various styles, sizes, and states. It is built with "extreme configurability" in mind, allowing you to customize every aspect via global configuration or local CSS variables.

## Usage

```html
<button lib-button variant="primary" size="md">Click Me</button>
```

## API

### Inputs

| Input      | Type                                               | Default     | Description                                                                         | Ref |
| ---------- | -------------------------------------------------- | ----------- | ----------------------------------------------------------------------------------- | --- |
| `variant`  | `'primary' \| 'secondary' \| 'outline' \| 'ghost'` | `'primary'` | The visual style of the button.                                                     |
| `size`     | `'sm' \| 'md' \| 'lg'`                             | `'md'`      | The size of the button.                                                             |
| `disabled` | `boolean`                                          | `false`     | Whether the button is disabled.                                                     |
| `loading`  | `boolean`                                          | `false`     | Whether the button is in a loading state. Shows a spinner and disables interaction. |
| `block`    | `boolean`                                          | `false`     | Whether the button should take up the full width of its container.                  |

### Global Configuration

You can set default values for the button component globally using `provideNimbusConfig`.

```typescript
// app.config.ts
import { provideNimbusConfig } from 'nimbus-ui';

export const appConfig: ApplicationConfig = {
  providers: [
    provideNimbusConfig({
      button: {
        defaultSize: 'lg',
        defaultVariant: 'outline',
      },
    }),
  ],
};
```

## Styling

The button component uses local CSS variables for all its styling. These variables map to global tokens by default but can be overridden for custom theming.

### CSS Variables

| Variable                   | Description               |
| -------------------------- | ------------------------- |
| `--btn-bg`                 | Background color          |
| `--btn-color`              | Text color                |
| `--btn-border-color`       | Border color              |
| `--btn-padding`            | Padding (controls size)   |
| `--btn-radius`             | Border radius             |
| `--btn-font-size`          | Font size                 |
| `--btn-font-weight`        | Font weight               |
| `--btn-hover-bg`           | Background color on hover |
| `--btn-hover-color`        | Text color on hover       |
| `--btn-hover-border-color` | Border color on hover     |

### Example Override

```html
<button lib-button style="--btn-bg: #6200ea; --btn-color: white; --btn-radius: 999px;">
  Custom Pill Button
</button>
```
