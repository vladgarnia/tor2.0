import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export class ApiUrlInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let apiUrl = 'http://tor.it-teams.com/api';

    apiUrl = apiUrl.endsWith('/') ? apiUrl : `${apiUrl}/`;
    const requestUrl = `${apiUrl}${req.url}`;

    req = req.clone({
      url: requestUrl
    });

    return next.handle(req);
  }
}
