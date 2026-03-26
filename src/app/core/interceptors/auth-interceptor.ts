import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
    if (req.headers.has('X-Skip-Auth')) {
        return next(req.clone({
            headers: req.headers.delete('X-Skip-Auth'),
        }));
    }

    if (!req.url.startsWith('/api')) {
        return next(req);
    }

    const token = localStorage.getItem('token');
    if (!token) {
        return next(req);
    }

    const authReq = req.clone({
        setHeaders: {
            Authorization: `Bearer ${token}`,
        },
    });

    return next(authReq);
};