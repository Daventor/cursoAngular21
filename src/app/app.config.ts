import { ApplicationConfig, inject, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, Router, withComponentInputBinding, withNavigationErrorHandler, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { APP_SETTINGS, defaultAppSettings } from './config/app-settings';
import { environment } from '../environments/environment';
import { provideHttpClient, withFetch, withInterceptors, withJsonpSupport, withRequestsMadeViaParent, withXsrfConfiguration } from '@angular/common/http';
import { loggingInterceptorInterceptor } from './core/interceptors/logging-interceptor-interceptor';
import { cachingInterceptor } from './core/interceptors/caching-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes, 
      withComponentInputBinding(),
      withNavigationErrorHandler((navError) => {
        const router = inject(Router);
        console.log('Navigation error: ', navError);
        
        if(navError.error?.status === 404){
          router.navigate([]);
        }

         if (navError.error?.status === 401) {
          router.navigate(['/login']);
          return;
        }

        // Fallback
        router.navigate(['/error']);
      }),
      withViewTransitions()
    ),
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
      withInterceptors([loggingInterceptorInterceptor, cachingInterceptor])
    )
  ]
};
