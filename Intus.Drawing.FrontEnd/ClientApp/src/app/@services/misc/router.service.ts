import { Injectable } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, UrlTree } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpStatusCode } from '@models/enums/http-status-code.enum';

@Injectable({ providedIn: 'root' })
export class RouterService {

    private readonly isNavigating$ = new BehaviorSubject(false);

    constructor(private router: Router) {
        this.router.events
            .pipe(
                filter(event =>
                    event instanceof NavigationStart ||
                    event instanceof NavigationEnd ||
                    event instanceof NavigationCancel ||
                    event instanceof NavigationError),
                map(event => {
                    if (event instanceof NavigationStart) {
                        return true;
                    }

                    return false;
                }),
            )
            .subscribe(this.isNavigating$);
    }

    isNavigating(): Observable<boolean> {
        return this.isNavigating$.asObservable();
    }

    getErrorUrl(error?: HttpErrorResponse): UrlTree {
        this.router.getCurrentNavigation().extras.skipLocationChange = true;
        if (!error) {
            return this.router.createUrlTree(['/server-error']);
        }

        switch (error.status) {
            case HttpStatusCode.ServerDown:
                return this.router.createUrlTree(['/server-down']);

            case HttpStatusCode.NotFound:
                return this.router.createUrlTree(['/not-found']);

            case HttpStatusCode.Forbidden:
            case HttpStatusCode.Unauthorized:    
                return this.router.createUrlTree(['/forbidden']);

            case HttpStatusCode.ServerError:
            default:
                return this.router.createUrlTree(['/server-error']);
        }
    }

    navigateByHttpError(error?: HttpErrorResponse) {
        const url = this.getErrorUrl(error);
        this.router.navigateByUrl(url);
    }
}
