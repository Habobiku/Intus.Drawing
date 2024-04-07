import { AbstractControl, ValidationErrors, Validators, AsyncValidatorFn } from '@angular/forms';
import { notEmptyValidator } from './not-empty';
import { numberValidator } from './number';
import { integerNumberValidator } from './integer-number';
import { positiveNumberValidator } from './positive-number';
import { objectValidator } from './object';
import { uniqValidator } from './uniq';

export class AppValidators {

    static requiredNotEmpty(control: AbstractControl) {
        const validatorFn = Validators.compose([
            Validators.required,
            AppValidators.notEmpty,
        ]);

        return validatorFn!(control);
    }

    static notEmpty(control: AbstractControl): ValidationErrors | null {
        return notEmptyValidator(control);
    }

    static number(control: AbstractControl): ValidationErrors | null {
        return numberValidator(control);
    }

    static integerNumber(control: AbstractControl): ValidationErrors | null {
        return integerNumberValidator(control);
    }

    static positiveNumber(control: AbstractControl): ValidationErrors | null {
        return positiveNumberValidator(control);
    }

    static greaterThanZero(control: AbstractControl) {
        const isGreater = Number(control.value) > 0;
        return isGreater ? null : { 'greaterThanZero': true };
    }

    static object(control: AbstractControl): ValidationErrors | null {
        return objectValidator(control);
    }

    static uniq(controlName: string): AsyncValidatorFn {
        return uniqValidator(controlName);
    }

    static notInFuture(control: AbstractControl): ValidationErrors | null {
        const value = control.value;
        if (value && new Date(value) > new Date()) {
            return { notInFuture: true };
        }
        return null;
    }

    static notInFutureYear(control: AbstractControl): ValidationErrors | null {
        const value = control.value;
        if (value && +value > new Date().getFullYear()) {
            return { notInFuture: true };
        }
        return null;
    }

    static validYear(control: AbstractControl): ValidationErrors | null {
        const value = control.value;
        if (value && value < 1900) {
            return { validYear: true };
        }
        return null;
    }
}
