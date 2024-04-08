import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiUrlInterceptor } from './api-url.interceptor';
import { ErrorInterceptor } from './error.interceptor';

export const interceptors = [
    { provide: HTTP_INTERCEPTORS, useClass: ApiUrlInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
];
