import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { APP_SETTINGS, defaultAppSettings } from './config/app-settings';
import { environment } from '../environments/environment';
import { provideHttpClient, withFetch, withJsonpSupport, withRequestsMadeViaParent, withXsrfConfiguration } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    {
      provide: APP_SETTINGS, useValue: environment.appSettings
    },
    provideHttpClient(
      withFetch(),
      //withJsonpSupport()
      // withXsrfConfiguration(
      //   {
      //     cookieName: 'MY-XSFR-TOKEN'
      //   }
      // )
      //withRequestsMadeViaParent
    )
  ]
};
