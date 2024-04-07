import { NgModule } from '@angular/core';
import { ErrorPagesRoutingModule } from './error-pages-routing.module';
import { ErrorPage } from './error/error.page';
import { SharedModule } from 'shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        ErrorPagesRoutingModule,
    ],
    declarations: [
        ErrorPage,
    ],
})
export class ErrorPagesModule { }
