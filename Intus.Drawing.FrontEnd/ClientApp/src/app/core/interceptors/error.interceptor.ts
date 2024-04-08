import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NotificationService } from '@core/notification/notification.service';
import { Utils } from 'shared/utils/utils';

@Injectable({ providedIn: 'root' })
export class ErrorInterceptor implements HttpInterceptor {

    constructor(
        private notificationService: NotificationService,
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError((error: HttpErrorResponse, caught) => {
                return this.handleApiError(error, caught);
            }),
        );
    }

    handleApiError(error: HttpErrorResponse, caught: Observable<any>): Observable<any> {
        if (error) {
            const message = error.error && Utils.isString(error.error)
                ? error.error
                : `httpError.${error.status}`;
            this.notificationService.error(message);
        }

        return throwError(error);
    }
}
