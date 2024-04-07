import { Utils } from './utils';

export class NumberUtils {

    static toNumber(value: any): number | null {
        if (Utils.isString(value)) {
            return this.toNumberFromString(value);
        }
        if (Utils.isNumber(value)) {
            return value;
        }

        return null;
    }

    static isPositive(value: number): boolean {
        return value >= 0;
    }

    static isInt(value: number): boolean {
        return (value % 1) === 0;
    }

    static round(value: number, precision = 2): number {
        return Math.round(value * Math.pow(10, precision)) / Math.pow(10, precision);
    }

    static isStringNumber(value: string): boolean {
        return /^-?\d+(\.\d*)?$/.test(value);
    }

    static toNumberFromString(value: string) {
        const string = value.trim();
        if (!this.isStringNumber(value)) {
            return null;
        }
        const number = parseFloat(string);

        return Utils.isNumber(number) ? number : null;
    }
}
