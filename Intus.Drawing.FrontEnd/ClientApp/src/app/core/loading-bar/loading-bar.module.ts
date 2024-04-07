import { NgModule } from '@angular/core';
import { LoadingBarComponent } from './loading-bar.component';
import { LoadingBarService } from './loading-bar.service';
import { SharedModule } from 'shared/shared.module';

@NgModule({
    imports: [SharedModule],
    declarations: [LoadingBarComponent],
    exports: [LoadingBarComponent],
    providers: [LoadingBarService],
})
export class LoadingBarModule { }
