import { AbstractControl, UntypedFormGroup, UntypedFormArray } from '@angular/forms';

export class FormUtils {

    static validate(control: AbstractControl) {
        this.markAsTouched(control);
    }

    static markAsDirty(control: AbstractControl, opts = { onlySelf: false }) {
        if (control instanceof UntypedFormGroup) {
            Object.values(control.controls).forEach(subcontrol => {
                this.markAsDirty(subcontrol, { onlySelf: true });
            });
        }
        else if (control instanceof UntypedFormArray) {
            control.controls.forEach(subcontrol => {
                this.markAsDirty(subcontrol, { onlySelf: true });
            });
        }
        control.markAsDirty(opts);
    }

    static markAsPristine(control: AbstractControl, opts = { onlySelf: false }) {
        if (control instanceof UntypedFormGroup) {
            Object.values(control.controls).forEach(subcontrol => {
                this.markAsPristine(subcontrol, { onlySelf: true });
            });
        }
        else if (control instanceof UntypedFormArray) {
            control.controls.forEach(subcontrol => {
                this.markAsPristine(subcontrol, { onlySelf: true });
            });
        }
        control.markAsPristine(opts);
    }

    static markAsTouched(control: AbstractControl, opts = { onlySelf: false }) {
        if (control instanceof UntypedFormGroup) {
            Object.values(control.controls).forEach(subcontrol => {
                this.markAsTouched(subcontrol, { onlySelf: true });
            });
        }
        else if (control instanceof UntypedFormArray) {
            control.controls.forEach(subcontrol => {
                this.markAsTouched(subcontrol, { onlySelf: true });
            });
        }
        control.markAsTouched(opts);
    }

    static markAsUntouched(control: AbstractControl, opts = { onlySelf: false }) {
        if (control instanceof UntypedFormGroup) {
            Object.values(control.controls).forEach(subcontrol => {
                this.markAsUntouched(subcontrol, { onlySelf: true });
            });
        }
        else if (control instanceof UntypedFormArray) {
            control.controls.forEach(subcontrol => {
                this.markAsUntouched(subcontrol, { onlySelf: true });
            });
        }
        control.markAsUntouched(opts);
    }

    static updateValueAndValidity(control: AbstractControl, opts = { onlySelf: true, emitEvent: false }) {
        if (control instanceof UntypedFormGroup) {
            Object.values(control.controls).forEach(subcontrol => {
                this.updateValueAndValidity(subcontrol, { onlySelf: true, emitEvent: false });
            });
        }
        else if (control instanceof UntypedFormArray) {
            control.controls.forEach(subcontrol => {
                this.updateValueAndValidity(subcontrol, { onlySelf: true, emitEvent: false });
            });
        }
        control.updateValueAndValidity(opts);
    }

}
