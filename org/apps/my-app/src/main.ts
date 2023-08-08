import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppRootComponent } from '@org/ui-shared/ui';

bootstrapApplication(AppRootComponent, appConfig).catch((err) =>
  console.error(err)
);
