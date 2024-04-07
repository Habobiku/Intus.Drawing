import { Utils } from './utils';

export class StringUtils {

    static toString(value: any): string {
        if (Utils.isString(value)) {
            return value;
        }
        if (Utils.isNumber(value)) {
            return value.toString();
        }
        if (Utils.isBoolean(value)) {
            return value.toString();
        }

        return '';
    }

    static escapeHTML(value: string): string {
        const entityMap: { [key:string]: string } = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            '\'': '&#39;',
            '/': '&#x2F;',
            '`': '&#x60;',
            '=': '&#x3D;',
        };

        return value.replace(/[&<>"'`=\/]/g, s => entityMap[s]);
    }
}
