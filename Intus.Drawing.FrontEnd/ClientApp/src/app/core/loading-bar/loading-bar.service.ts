import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { scan, map, distinctUntilChanged } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class LoadingBarService {

    private actions$ = new Subject<(count: number) => number>();
    private count$ = new BehaviorSubject(0);

    constructor() {
        this.actions$.pipe(
            scan<(count: number) => number, number>((value, action) => action(value), 0),
        ).subscribe(this.count$);
    }

    start() {
        this.actions$.next(value => value + 1);
    }

    stop() {
        this.actions$.next(value => value > 0 && value - 1 || 0);
    }

    reset() {
        this.actions$.next(() => 0);
    }

    isActive() {
        return this.count$.pipe(
            map(value => value > 0),
            distinctUntilChanged(),
        );
    }

}
