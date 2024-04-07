import { defer } from 'rxjs';
import { tap } from 'rxjs/operators';

// tslint:disable:no-console no-invalid-this

export function apiLog(requestLogFn = console.info, responseLogFn = console.info, errorLogFn = console.error) {
    return (target: any, key: string, descriptor: PropertyDescriptor) => {
        if (descriptor.value) {
            const method = descriptor.value;
            descriptor.value = function(...args: any[]) {
                return defer(() => {
                    requestLogFn(`${target.constructor.name}.${key}()`, 'Request', args);

                    return method.apply(this, args);
                }).pipe(
                    tap(
                        response => responseLogFn(`${target.constructor.name}.${key}()`, 'Response', response),
                        error => errorLogFn(`${target.constructor.name}.${key}()`, 'Fail', error),
                    ),
                );
            };
        }

        return descriptor;
    };
}

(window as any).apiLog = apiLog;
