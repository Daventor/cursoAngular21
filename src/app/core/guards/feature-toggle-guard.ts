import { CanMatchFn } from '@angular/router';

// Segments -> ['admin', 'users', 42]
export const featureToggleGuard: CanMatchFn = (route, segments) => {
  const feature = route.data?.['feature'];

  return (feature === 'REPORTS_V2');
};
