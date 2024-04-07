import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TranslationService, Translation } from '@core/translation/translation.service';

@Injectable({ providedIn: 'root' })
export class NotificationService {

    constructor(
        private toastrService: ToastrService,
        private translationService: TranslationService,
    ) {}

    error(query: Translation) {
        this.showToaster('error', query);
    }

    success(query: Translation) {
        this.showToaster('success', query);
    }

    private showToaster(classModifier: string, query: Translation) {
        const translation = this.translationService.translate(query);
        this.toastrService.show(translation, undefined, undefined, `toast toast--${classModifier}`);
    }
}
