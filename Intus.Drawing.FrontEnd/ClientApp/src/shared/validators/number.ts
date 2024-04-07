import { AbstractControl, ValidationErrors } from '@angular/forms';
import { NumberUtils } from 'shared/utils/number-utils';

export function numberValidator(control: AbstractControl): ValidationErrors | null {
    if (control.value == null || control.value === '') {
        return null;
    }

    const number = NumberUtils.toNumber(control.value);

    if (number == null) {
        return { number: true };
    }

    return null;
}
