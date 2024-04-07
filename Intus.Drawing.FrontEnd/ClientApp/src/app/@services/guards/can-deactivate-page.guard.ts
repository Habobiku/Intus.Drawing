import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { DialogService } from '@core/dialog/dialog.service';
import { Utils } from 'shared/utils/utils';

export interface CanDeactivatePage {
    canDeactivate: () => Observable<boolean> | boolean | string;
}

@Injectable({ providedIn: 'root' })
export class CanDeactivatePageGuard implements CanDeactivate<CanDeactivatePage> {

    constructor(private dialogService: DialogService) {}

    canDeactivate(component: CanDeactivatePage) {
        const response$ = component.canDeactivate ? component.canDeactivate() : true;

        if (Utils.isObservable(response$) || Utils.isBoolean(response$)) {
            return response$;
        }

        return this.dialogService.confirm(response$, undefined, 'discard', 'keep', true);
    }

}
