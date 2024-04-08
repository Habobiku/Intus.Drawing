import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({ providedIn: 'root' })
export class NotificationService {

    constructor(
        private toastrService: ToastrService,
    ) {}

    error(query: string) {
        this.showToaster('error', query);
    }

    success(query: string) {
        this.showToaster('success', query);
    }

    private showToaster(classModifier: string, query: string) {
        this.toastrService.show(query, undefined, undefined, `toast toast--${classModifier}`);
    }
}
