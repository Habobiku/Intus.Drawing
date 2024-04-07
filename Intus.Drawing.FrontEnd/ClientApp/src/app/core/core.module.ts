import { NgModule } from '@angular/core';

import { LayoutComponent } from './layout/layout.component';
import { LoadingBarModule } from './loading-bar/loading-bar.module';
import { ToastContainerModule } from 'ngx-toastr';
import { SharedModule } from 'shared/shared.module';
import { NotificationsModule } from './notification/notification.module';
import { DialogModule } from './dialog/dialog.module';

@NgModule({
    imports: [
        SharedModule,
        LoadingBarModule,
        DialogModule,
        NotificationsModule,
        ToastContainerModule,
    ],
    declarations: [
        LayoutComponent,
    ],
    exports: [
        LayoutComponent,
    ]
})
export class CoreModule { }
