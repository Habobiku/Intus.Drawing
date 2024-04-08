import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiUrlInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!req.url.startsWith('/')) {
            return next.handle(req);
        }
        const request = req.clone({
            url: `${environment.apiUrl}${req.url}`,
        });

        return next.handle(request);
    }

}
