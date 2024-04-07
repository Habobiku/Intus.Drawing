import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { toastrConfig } from './toastr.config';

@NgModule({
    imports: [
        ToastrModule.forRoot(toastrConfig),
    ],
})
export class NotificationsModule { }
