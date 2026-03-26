import { inject, Inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';

export const adminChildGuard: CanActivateChildFn = (childRoute, state) => {
  const router = inject(Router);

  return router.createUrlTree(['routing/info'], {
    queryParams: {
      redirectChild: state.url
    }
  })
};
