import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogErrorMessageData {
    title: string;
    body: string;
    description: string;
    btnTextOk: string;
}

@Component({
    templateUrl: './error-message.component.html',
    styleUrls: ['./error-message.component.scss'],
})
export class DialogErrorMessageComponent {

    constructor(@Inject(MAT_DIALOG_DATA) public data: DialogErrorMessageData) { }

}
