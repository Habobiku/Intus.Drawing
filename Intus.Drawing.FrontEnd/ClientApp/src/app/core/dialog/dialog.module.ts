import { NgModule } from '@angular/core';
import { DialogConfirmComponent } from './confirm/confirm.component';
import { DialogConfirmDestructiveComponent } from './confirm-destructive/confirm-destructive.component';
import { DialogAlertComponent } from './alert/alert.component';
import { DialogErrorMessageComponent } from './error-message/error-message.component';
import { SharedModule } from 'shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
    ],
    declarations: [
        DialogConfirmComponent,
        DialogConfirmDestructiveComponent,
        DialogAlertComponent,
        DialogErrorMessageComponent
    ]
})
export class DialogModule { }
