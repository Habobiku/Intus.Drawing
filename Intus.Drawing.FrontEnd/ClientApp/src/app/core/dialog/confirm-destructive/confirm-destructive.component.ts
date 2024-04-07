import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogConfirmData, DialogConfirmComponent } from '../confirm/confirm.component';

@Component({
    templateUrl: './confirm-destructive.component.html',
    styleUrls: ['./confirm-destructive.component.scss'],
})
export class DialogConfirmDestructiveComponent extends DialogConfirmComponent {

    constructor(@Inject(MAT_DIALOG_DATA) public data: DialogConfirmData) {
        super(data);
    }

}
