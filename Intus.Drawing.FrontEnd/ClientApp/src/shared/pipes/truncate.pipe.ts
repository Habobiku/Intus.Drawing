import { Pipe, PipeTransform } from '@angular/core';
import { Utils } from 'shared/utils/utils';

@Pipe({ name: 'truncate' })
export class TruncatePipe implements PipeTransform {

    transform(value: unknown, length = Infinity, _suffix = '...', _preserve = true): any {
        if (!Utils.isString(value) || value.length <= length) {
            return value;
        }

        const index = value.indexOf(' ', length);

        if (index === -1) {
            return value;
        }

        return `${value.substring(0, index)}...`;
    }
}
