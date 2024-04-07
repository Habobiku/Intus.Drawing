import { Pipe, PipeTransform } from '@angular/core';
import { Utils } from 'shared/utils/utils';

@Pipe({ name: 'decapitalize' })
export class DecapitalizePipe implements PipeTransform {

    transform(value: any): string {
        if (!Utils.isString(value)) {
            return value;
        }

        return DecapitalizePipe.decapitalize(value)
    }
    static decapitalize(value: string){
        return value.charAt(0).toLowerCase() + value.slice(1);
    }
}
