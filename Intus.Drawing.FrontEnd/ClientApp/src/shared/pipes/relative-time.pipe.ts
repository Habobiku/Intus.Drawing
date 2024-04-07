import { Pipe, PipeTransform } from '@angular/core';
import { DateUtils } from 'shared/utils/date-utils';

@Pipe({ name: 'relativeTime' })
export class RelativeTimePipe implements PipeTransform {

    transform(value: any): string {
        return DateUtils.getRelativeTime(value);
    }
}
