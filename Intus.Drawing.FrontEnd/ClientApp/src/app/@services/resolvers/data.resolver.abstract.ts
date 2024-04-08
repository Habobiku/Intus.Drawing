import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, NEVER } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { RouterService } from '@services/misc/router.service';

export abstract class AbstractDataResolver<T = any> implements Resolve<T> {

    constructor(protected routerService: RouterService) {}

    resolve(activatedRouteSnapshot: ActivatedRouteSnapshot) {
        return this.resolveData(activatedRouteSnapshot).pipe(
            catchError(error => {
                this.routerService.navigateByHttpError(error);

                return NEVER;
            }),
        );
    }

    protected abstract resolveData(activatedRouteSnapshot: ActivatedRouteSnapshot): Observable<T>;
}
