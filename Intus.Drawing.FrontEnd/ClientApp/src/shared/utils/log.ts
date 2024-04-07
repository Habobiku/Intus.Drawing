import { tap } from 'rxjs/operators';
import { Utils } from './utils';

export function log(logFn = console.info) {
    return (target: any, key: string, descriptor?: PropertyDescriptor) => {
        if (descriptor) {
            return logMethod(logFn, target, key, descriptor);
        }

        return logProperty(logFn, target, key);
    };
}

function logMethod(logFn: any, target: any, key: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    if (descriptor.value) {
        const method = descriptor.value;
        descriptor.value = function(...args: any[]) {
            logFn(`${target.constructor.name}.${key}()`, args);

            return method.apply(this, args);
        };
    }
    if (descriptor.set) {
        const setter = descriptor.set;
        descriptor.set = function(newValue: any) {
            logFn(`${target.constructor.name}.${key}()`, newValue);

            return setter.call(this, newValue);
        };
    }

    return descriptor;
}

function logProperty(logFn: any, target: any, key: string): void {
    let value = target[key];
    Object.defineProperty(target, key, {
        get: () => value,
        set: (newValue: any) => {
            if (Utils.isObservable(newValue)) {
                if (/Subject$/.test(newValue.constructor.name)) {
                    console.warn('@log()', newValue.constructor.name, 'can broke functionality!');
                }
                logFn(`${target.constructor.name}.${key}`, value, '=>', 'Observable');
                value = newValue.pipe(
                    tap(
                        val => logFn(`${target.constructor.name}.${key}`, 'Observable value', '=>', val),
                        error => logFn(`${target.constructor.name}.${key}`, 'Observable error', '=>', error),
                        () => logFn(`${target.constructor.name}.${key}`, 'Observable complete'),
                    ),
                );

                return;
            }
            if (value !== newValue) {
                logFn(`${target.constructor.name}.${key}`, value, '=>', newValue);
            }
            value = newValue;
        },
        enumerable: true,
        configurable: true,
    });
}

(window as any).log = log;
