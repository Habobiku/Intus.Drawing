import { Pipe, PipeTransform } from '@angular/core';
import { Utils } from 'shared/utils/utils';

@Pipe({ name: 'time' })
export class TimePipe implements PipeTransform {

    transform(value: unknown): string {
        if (!Utils.isNumber(value)) {
            return '';
        }
        if (value === 0) {
            return '-';
        }

        const hours = Math.floor(value / 60);
        const mins = value % 60;

        if (!mins) {
            return `${hours}h`;
        }

        if (!hours) {
            return `${mins}m`;
        }

        return `${hours}h ${mins}m`;
    }
}

@Pipe({ name: 'timeHours' })
export class TimeHoursPipe implements PipeTransform {

    transform(value: unknown): string {
        if (!Utils.isNumber(value)) {
            return '';
        }
        if (value === 0) {
            return '-';
        }

        const hours = Math.floor(value / 60);

        return `${hours}h`;
    }
}

@Pipe({ name: 'timeDecimalHours' })
export class TimeDecimalHoursPipe implements PipeTransform {
    transform(value: unknown): string {
        if (!Utils.isNumber(value)) {
            return '';
        }
        if (value === 0) {
            return '-';
        }

        const hours = (value / 60).toFixed(2);
        return `${hours}h`;
    }
}
