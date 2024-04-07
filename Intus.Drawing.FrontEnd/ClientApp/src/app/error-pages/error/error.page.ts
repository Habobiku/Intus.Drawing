import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './error.page.html',
    styleUrls: ['./error.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorPage {

    get type() {
        return this.activatedRoute.snapshot.data.type;
    }

    constructor(private activatedRoute: ActivatedRoute) { }
}
