import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Utils } from 'shared/utils/utils';

export function objectValidator(control: AbstractControl): ValidationErrors | null {
    if (control.value == null || control.value === '') {
        return null;
    }

    if (!Utils.isObject(control.value)) {
        return { object: true };
    }

    return null;
}
