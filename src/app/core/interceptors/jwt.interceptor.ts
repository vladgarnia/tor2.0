import { AuthService } from '@app/auth';
import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { tap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private service: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.service.getToken()) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.service.getToken()}`
        }
      });
    }
    return next.handle(request).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          const authHeader = event.headers.get('Authorization');
          if (!authHeader) {
            return;
          }
          const token = authHeader.replace('Bearer ', '');
          this.service.setToken(token);
        }
      }, (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.service.checkLogin();
          }
        }
      }));
  }
}
