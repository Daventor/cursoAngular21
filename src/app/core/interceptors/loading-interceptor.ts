import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';
//import { LoadingService } from '../services/loading-service';

// export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
// //   const loadingService = inject(LoadingService);

// //   loadingService.show();

// //   return next(req).pipe(
// //     finalize(() => loadingService.hide())
// //   );
// };

/**
 @Injectable({ providedIn: 'root' })
export class LoadingService {
  readonly loading = signal(false);

  show() {
    this.loading.set(true);
  }

  hide() {
    this.loading.set(false);
  }
}
 */