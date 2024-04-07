import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

export function delayedOf<T>(data: T, maxDelay = 500) {
    return of(data).pipe(
        delay(Math.random() * maxDelay),
    );
}
