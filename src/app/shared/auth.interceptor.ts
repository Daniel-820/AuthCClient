import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from './services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService)
  const toastr = inject(ToastrService)
  const router = inject(Router)
  if (authService.isLoggedIn()) {
    const cloneReq = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + authService.getToken())
    })
    return next(cloneReq).pipe(
      tap({
        error: (err: any) => {
          if (err.status == 401) {
            authService.deleteToken();
            setTimeout(() => {
              toastr.info("Please login again", "Session Expired!")
            }, 1000);
            router.navigateByUrl("/signin");
          } else if (err.status == 403) {
            toastr.error("Oops! It seems your not authorized to perform the action.")
          }
        }
      })
    )
  }
  else {
    return next(req);
  }
};
