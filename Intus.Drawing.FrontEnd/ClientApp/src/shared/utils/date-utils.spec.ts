import { DateUtils } from './date-utils';

describe('DateUtils', () => {

    describe('getMonthDiff', () => {
        it('should calculate years and months', () => {
            const result = DateUtils.getMonthDiff(new Date('2018-02-09'), new Date('2019-04-09'));

            const expected = 12 + 2; // 1 year + 2 months
            expect(result).toBe(expected);
        });
        it('should calculate additional days', () => {
            const result = DateUtils.getMonthDiff(new Date('2018-02-09'), new Date('2019-03-19'));

            const expected = 12 + 1 + (10 / 31); // 1 year + 1 month + 10 days
            expect(result).toBe(expected);
        });
        it('should calculate missing days', () => {
            const result = DateUtils.getMonthDiff(new Date('2017-01-09'), new Date('2019-03-03'));

            const expected = 24 + 1 + (19 / 28) + (3 / 31); // 2 year + 1 month + 19 february days + 3 march days
            expect(result).toBe(expected);
        });
    });

});
