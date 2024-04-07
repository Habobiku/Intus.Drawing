import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Utils } from 'shared/utils/utils';

export function notEmptyValidator(control: AbstractControl): ValidationErrors | null {
    if (control.value == null || control.value === '' || !Utils.isString(control.value)) {
        return null;
    }

    const value = control.value ? control.value.trim() : '';

    return value.length === 0 ? { notEmpty: true } : null;
}
