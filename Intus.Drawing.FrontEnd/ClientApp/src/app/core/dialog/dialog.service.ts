
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, defer } from 'rxjs';
import { DialogConfirmComponent, DialogConfirmData } from './confirm/confirm.component';
import { DialogConfirmDestructiveComponent } from './confirm-destructive/confirm-destructive.component';
import { DialogAlertComponent, DialogAlertData } from './alert/alert.component';
import { DialogErrorMessageComponent, DialogErrorMessageData } from './error-message/error-message.component';

@Injectable({ providedIn: 'root' })
export class DialogService {

    constructor(public matDialog: MatDialog) { }

    errorMessage(
        body: string,
        title: string = 'errorMessageDefaultTitle',
        description: string = 'errorMessageDefaultTitle',
        btnTextOk: string = 'ok',
    ): Observable<true> {
        const data: DialogErrorMessageData = {
            body, title, description, btnTextOk,
        };

        return defer(() => {
            return this.matDialog.open(DialogErrorMessageComponent, {
                data,
                disableClose: true,
                width: '400px',
            }).afterClosed();
        });
    }

    alert(
        body: string,
        title: string = 'alertDefaultTitle',
        btnTextOk: string = 'ok',
    ): Observable<true> {
        const data: DialogAlertData = {
            body, title, btnTextOk,
        };

        return defer(() => {
            return this.matDialog.open(DialogAlertComponent, {
                data,
                disableClose: true,
                width: '400px',
            }).afterClosed();
        });
    }

    confirm(
        body: string = 'confirmDefault',
        title: string = 'confirmDefaultTitle',
        btnTextYes: string = 'yes',
        btnTextNo: string = 'no',
        destructive = false,
    ): Observable<boolean> {
        const data: DialogConfirmData = {
            body, title, btnTextYes, btnTextNo,
        };

        return defer(() => {
            return this.matDialog.open(destructive ? DialogConfirmDestructiveComponent : DialogConfirmComponent, {
                data,
                disableClose: true,
                width: '400px',
            }).afterClosed();
        });
    }

    confirmDelete(
        body: string = 'confirmDelete',
        title: string = 'confirmDeleteTitle',
        btnTextYes: string = 'delete',
        btnTextNo: string = 'keep',
    ): Observable<boolean> {
        return this.confirm(
            body, title, btnTextYes, btnTextNo, true,
        );
    }

    confirmPublish(
        body: string = 'publishConfirm',
        title: string = 'confirmDefaultTitle',
        btnTextYes: string = 'publish',
        btnTextNo: string = 'cancel',
    ): Observable<boolean> {
        return this.confirm(body, title, btnTextYes, btnTextNo);
    }
}
