import { AbstractControl, NgControl } from '@angular/forms';
import { Utils } from './utils';

export class ValidationUtils {

    static showError(control: AbstractControl): boolean {
        return control.invalid && control.touched;
    }

    static getErrorMessage(control: AbstractControl | NgControl): string | null {
        const errors = control.errors;
        if (!errors) {
            return null;
        }

        const errorKey = this.getErrorKey(control);
        if (!errorKey) {
            return null;
        }

        return `validation.${errorKey}`;
    }

    static getError(control: AbstractControl | NgControl): {} | null {
        const errorKey = this.getErrorKey(control);
        if (!errorKey) {
            return null;
        }

        const error = control.errors![errorKey];

        if (error !== undefined && !Utils.isObject(error)) {
            return {
                [errorKey]: error,
            };
        }

        return error || null;
    }

    private static getErrorKey(control: AbstractControl | NgControl): string | null {
        const errors = control.errors;

        if (!errors) {
            return null;
        }

        // material date input error priority
        if (errors.matDatepickerParse) {
            return 'matDatepickerParse';
        }

        for (const errorKey in errors) {
            if (errors.hasOwnProperty(errorKey)) {
                return errorKey;
            }
        }

        return null;
    }

}
