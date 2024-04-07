import { AbstractControl, ValidationErrors, AsyncValidatorFn, UntypedFormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';

export function uniqValidator(name: string): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
        const grandParent = control.parent && control.parent.parent && control.parent.parent;

        if (!grandParent) {
            return of(null);
        }

        const siblings = (grandParent.controls as UntypedFormGroup[])
            .filter(x => x !== control.parent)
            .map(x => x.controls[name]);

        for (const sibling of siblings) {
            // tslint:disable-next-line:triple-equals
            if (sibling.valid && sibling.value == control.value) {
                return of({ uniq: true });
            }
        }

        return of(null);
    };
}
