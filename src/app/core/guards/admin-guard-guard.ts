import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

export const adminGuardGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  // const authService = inject(AuthService);
  // return authService.isAuthenticated()
  //return false; // Para la navegación (página en blanco)

  const router = inject(Router);

  return router.createUrlTree(['/routing/review'],{
    queryParams: {
      redirect: state.url
    }
  })
};
