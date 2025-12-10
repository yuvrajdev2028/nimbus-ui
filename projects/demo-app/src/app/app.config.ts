import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideNimbusConfig } from 'nimbus-ui';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideNimbusConfig({
      button: {
        defaultSize: 'md',
        defaultVariant: 'primary',
      },
    }),
  ],
};
