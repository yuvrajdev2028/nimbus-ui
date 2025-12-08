import { Component, Input, Inject, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NIMBUS_CONFIG, NimbusConfig } from '../core/config';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[lib-button], a[lib-button]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.scss',
  host: {
    '[class]': 'classes',
    '[attr.disabled]': 'disabled || loading || null',
    '[class.nui-btn--loading]': 'loading',
    '[class.nui-btn--block]': 'block',
  },
})
export class Button {
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'md';
  @Input() disabled = false;
  @Input() loading = false;
  @Input() block = false;

  constructor(@Optional() @Inject(NIMBUS_CONFIG) config: NimbusConfig | null) {
    if (config?.button) {
      this.variant = config.button.defaultVariant || this.variant;
      this.size = config.button.defaultSize || this.size;
    }
  }

  get classes(): string {
    return `nui-btn nui-btn--${this.variant} nui-btn--${this.size}`;
  }
}
