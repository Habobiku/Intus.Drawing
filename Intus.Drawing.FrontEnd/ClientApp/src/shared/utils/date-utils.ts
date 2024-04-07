import timeAgoSvLocale from 'javascript-time-ago/locale/sv';
import TimeAgo from 'javascript-time-ago';
import { Utils } from './utils';

TimeAgo.addLocale(timeAgoSvLocale);
const timeAgo = new TimeAgo('sv');

export class DateUtils {

    static getMonthDiff(from: Date, to: Date): number {
        let months = (to.getFullYear() - from.getFullYear()) * 12;
        months += to.getMonth() - from.getMonth();

        const toDay = to.getDate();
        const fromDay = from.getDate();
        if (toDay > fromDay) {
            months += (toDay - fromDay) / DateUtils.daysInMonth(to);
        }
        else if (toDay < fromDay) {
            months -= 1;
            months += toDay / DateUtils.daysInMonth(to);
            const monthBeforeTo = new Date(to.getFullYear(), to.getMonth(), 0);
            const daysInMonthBeforeTo = DateUtils.daysInMonth(monthBeforeTo);
            months += (daysInMonthBeforeTo - fromDay) / daysInMonthBeforeTo;
        }

        return months;
    }

    static daysInMonth(date: Date): number {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    }

    static getNextMonth1stDay() {
        const now = new Date();

        return new Date(now.getFullYear(), now.getMonth() + 1);
    }

    static getNextYear1stDay() {
        const now = new Date();

        return new Date(now.getFullYear() + 1, 0);
    }

    static getRelativeTime(date: number | string | Date): string {
        const dateObj = Utils.isDate(date) ? date : new Date(date);

        return timeAgo.format(dateObj);
    }

    static getISODateWithOffset(date: Date | string) {
        // tslint:disable-next-line: no-parameter-reassignment
        date = date instanceof Date ? date : new Date(date);

        const offset = date.getTimezoneOffset();
        const absOffset = Math.abs(offset);
        let offsetString = (Math.floor(absOffset) / 60).toString().padStart(2,'0');
        offsetString += ':';
        offsetString += (absOffset / 60 % 1).toFixed(2).substr(-2);

        return date.getFullYear() + '-'
            + (date.getMonth() + 1).toString().padStart(2,'0') + '-'
            + date.getDate().toString().padStart(2,'0') + 'T'
            + date.getHours().toString().padStart(2,'0') + ':'
            + date.getMinutes().toString().padStart(2,'0') + ':'
            + date.getSeconds().toString().padStart(2,'0') + '.'
            + date.getMilliseconds().toString().padStart(3,'0')
            + (offset < 0 ? '+' : '-') + offsetString;
    }
}
