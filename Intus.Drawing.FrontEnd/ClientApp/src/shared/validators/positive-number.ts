import { AbstractControl, ValidationErrors } from '@angular/forms';
import { NumberUtils } from 'shared/utils/number-utils';

export function positiveNumberValidator(control: AbstractControl): ValidationErrors | null {
    if (control.value == null || control.value === '') {
        return null;
    }

    const number = NumberUtils.toNumber(control.value);

    if (number == null) {
        return null;
    }

    return NumberUtils.isPositive(number) ? null : { positiveNumber: true };
}
