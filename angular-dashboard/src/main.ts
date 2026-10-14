import { bootstrapApplication } from '@angular/platform-browser';
import '@edts/cyberpunk-ui';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
