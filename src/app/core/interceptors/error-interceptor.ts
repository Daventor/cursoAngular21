import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error) => {
      if (error.status === 401) {
        console.warn('Unauthorized');
      }

      if (error.status >= 500) {
        console.error('Server error', error);
      }

      return throwError(() => error);
    })
  );

  // Uso para logging, logout automático, toast globales
};