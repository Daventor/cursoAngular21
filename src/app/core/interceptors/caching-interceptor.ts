import { HttpContextToken, HttpInterceptorFn } from '@angular/common/http';

/**
 http-context.tokens.ts
export const SKIP_AUTH = new HttpContextToken<boolean>(() => false);
export const SKIP_LOADING = new HttpContextToken<boolean>(() => false);
export const SKIP_ERROR = new HttpContextToken<boolean>(() => false);
export const USE_CACHE = new HttpContextToken<boolean>(() => false);
 */

export const CACHING_ENABLED = new HttpContextToken<boolean>(() => false);

export const cachingInterceptor: HttpInterceptorFn = (req, next) => {
  if(req.context.get(CACHING_ENABLED)){
    // aplicamos la lógica de caché

    console.log("Usando cache");
    
  }else{
    console.log("No usando cache");
    
  }
  return next(req);
};
