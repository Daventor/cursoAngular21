import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';

export const loggingInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  console.log((req.url));
  
  //const authToken = inject(AuthService).getToken()
  const authToken = "MiTokenSeSeguridad";

  const newReq = req.clone(
    {
      headers: req.headers.append('X-Authentication-Token', authToken)
    }
  )

  return next(newReq);
};
