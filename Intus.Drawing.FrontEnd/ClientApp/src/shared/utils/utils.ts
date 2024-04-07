import { isObservable, Observable } from 'rxjs';
import { isEqual, cloneDeep } from 'lodash';

export class Utils {

    static isPrimitive(value: any): boolean {
        return this.isString(value) ||
            this.isNumber(value) ||
            this.isBoolean(value) ||
            this.isSymbol(value) ||
            this.isNull(value) ||
            this.isUndefined(value);
    }

    static isString(value: any): value is string {
        return typeof value === 'string';
    }

    static isNumber(value: any): value is number {
        return typeof value === 'number' && !isNaN(value) && isFinite(value);
    }

    static isNull(value: any): value is null {
        return value === null;
    }

    static isUndefined(value: any): value is undefined {
        return value === undefined;
    }

    static isBoolean(value: any): value is boolean {
        return typeof value === 'boolean';
    }

    static isArray<T>(value: any): value is T[] {
        return Array.isArray(value);
    }

    static isObject(value: any): value is Object {
        return !!value && typeof value === 'object' && value.constructor.name === 'Object';
    }

    static isDate(value: any): value is Date {
        return value instanceof Date;
    }

    static isSymbol(value: any): value is Symbol {
        return typeof value === 'symbol';
    }

    static isObservable<T>(value: any): value is Observable<T> {
        return isObservable(value);
    }

    static isEqual(a: any, b: any): boolean {
        return isEqual(a, b);
    }

    static clone<T>(value: T): T {
        return cloneDeep(value);
    }

    static isEmptyObject(a: object): boolean {
        return Utils.isEqual(a, {});
    }
}
