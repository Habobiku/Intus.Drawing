import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogConfirmData {
    title: string;
    body: string;
    btnTextNo: string;
    btnTextYes: string;
}

@Component({
    templateUrl: './confirm.component.html',
    styleUrls: ['./confirm.component.scss'],
})
export class DialogConfirmComponent {

    constructor(@Inject(MAT_DIALOG_DATA) public data: DialogConfirmData) { }

}
