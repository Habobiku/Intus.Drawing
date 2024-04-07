import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Subscription, noop } from 'rxjs';
import { LoadingBarService } from './loading-bar.service';
import { RouterService } from '@services/misc/router.service';

@Component({
    selector: 'drawing-loading-bar',
    templateUrl: './loading-bar.component.html',
    styleUrls: ['./loading-bar.component.scss'],
})
export class LoadingBarComponent implements OnInit, OnDestroy {

    @Input() color: ThemePalette = 'primary';

    value = 0;
    visible = false;

    private subscriptions = new Subscription();
    private active = false;
    private minWaitTime = 250; // 250ms material bar animation time
    private maxWaitTime = 500;
    private timeout: any;

    private get waitTime(): number {
        return this.minWaitTime + Math.random() * (this.maxWaitTime - this.minWaitTime);
    }

    constructor(
        private routerService: RouterService,
        private loadingBarService: LoadingBarService,
    ) { }

    ngOnInit() {
        this.subscriptions.add(
            this.loadingBarService.isActive()
                .subscribe(active => {
                    active ? this.start() : this.stop();
                }, noop),
        );

        this.subscriptions.add(
            this.routerService.isNavigating().subscribe(isNavigating => {
                isNavigating ? this.loadingBarService.start() : this.loadingBarService.stop();
            }, noop),
        );
    }

    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }

    onAnimationEnd() {
        if (!this.active) {
            this.visible = false;
            this.value = 0;

            return;
        }

        this.asyncMove(this.waitTime);
    }

    private start() {
        if (this.active) {
            return;
        }

        this.visible = true;
        this.value = 0;
        this.active = true;
        this.asyncMove(this.waitTime);
    }

    private stop() {
        if (!this.active) {
            return;
        }

        this.active = false;
        if (!this.value) {
            this.clearAsyncMove();
            this.asyncMove();
        }
    }

    private move() {
        this.value = this.active ? this.value + this.getIncrease(this.value) : 1;
    }

    private getIncrease(value: number) {
        return this.getMaxIncrease(value) * (Math.random() * 0.5 + 0.5);
    }

    private getMaxIncrease(value: number) {
        if (value < 0.4) { return 0.15; }
        if (value >= 0.4 && value < 0.6) { return 0.075; }
        if (value >= 0.6 && value < 0.7) { return 0.0375; }
        if (value >= 0.7 && value < 0.8) { return 0.01875; }
        if (value >= 0.8 && value < 0.9) { return 0.009375; }
        if (value >= 0.9 && value < 0.95) { return 0.0046875; }
        if (value >= 0.95 && value < 0.99) { return 0.001; }

        return 0;
    }

    private asyncMove(wait = 50) {
        this.timeout = setTimeout(() => this.move(), wait);
    }

    private clearAsyncMove() {
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
    }

}
