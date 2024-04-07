import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription, noop } from 'rxjs';
import { MediaObserver } from '@angular/flex-layout';
import { filter } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import { RouterService } from '@services/misc/router.service';

@Component({
    selector: 'drawing-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit, OnDestroy {

    @ViewChild('sidenav', { static: true }) sidenav: MatSidenav;
    @ViewChild(ToastContainerDirective, { static: true }) toastContainer: ToastContainerDirective;

    isMobileView = true;

    private subscriptions = new Subscription();

    constructor(
        private mediaObserver: MediaObserver,
        private routerService: RouterService,
        private toastrService: ToastrService,
    ) { }

    ngOnInit(): void {
        this.toastrService.overlayContainer = this.toastContainer;

        this.subscriptions.add(
            this.mediaObserver.asObservable().subscribe(changes => {
                this.isMobileView = changes.some(x => x.mqAlias === 'lt-md');
            }, noop),
        );

        this.subscriptions.add(
            this.routerService.isNavigating().pipe(
                filter(x => x),
            ).subscribe(() => {
                if (this.sidenav && this.sidenav.opened && this.sidenav.mode !== 'side') {
                    this.sidenav.close();
                }
            }, noop),
        );
    }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }

}
