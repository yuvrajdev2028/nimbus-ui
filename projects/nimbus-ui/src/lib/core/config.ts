import { InjectionToken, Provider } from '@angular/core';
import { ButtonSize, ButtonVariant } from '../button/button';

export interface NimbusConfig {
  button?: {
    defaultSize?: ButtonSize;
    defaultVariant?: ButtonVariant;
  };
}

export const NIMBUS_CONFIG = new InjectionToken<NimbusConfig>('NIMBUS_CONFIG');

export function provideNimbusConfig(config: NimbusConfig): Provider {
  return {
    provide: NIMBUS_CONFIG,
    useValue: config,
  };
}
