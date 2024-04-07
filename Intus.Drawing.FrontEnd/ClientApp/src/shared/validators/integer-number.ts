import { AbstractControl, ValidationErrors } from '@angular/forms';
import { NumberUtils } from '@utils/number-utils';

export function integerNumberValidator(control: AbstractControl): ValidationErrors | null {
    if (control.value == null || control.value === '') {
        return null;
    }

    const number = NumberUtils.toNumber(control.value);

    if (number == null) {
        return null;
    }

    return NumberUtils.isInt(number) ? null : { integerNumber: true };
}
