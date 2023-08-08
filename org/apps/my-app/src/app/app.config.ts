import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import {
  provideRouter,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { BootstrapModule } from '@org/ui-shared/ui';

export const appConfig: ApplicationConfig = {
  providers: [importProvidersFrom(BootstrapModule), provideRouter(appRoutes)],
};
