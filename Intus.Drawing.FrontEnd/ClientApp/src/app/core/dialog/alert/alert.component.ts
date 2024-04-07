import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogAlertData {
    title: string;
    body: string;
    btnTextOk: string;
}

@Component({
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss'],
})
export class DialogAlertComponent {

    constructor(@Inject(MAT_DIALOG_DATA) public data: DialogAlertData) { }

}
