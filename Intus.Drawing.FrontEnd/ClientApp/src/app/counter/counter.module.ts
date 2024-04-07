import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "shared/shared.module";
import { CounterRoutingModule } from "./counter-routing.module";
import { CounterPage } from "./counter.component";


@NgModule({
    declarations: [
        CounterPage
    ],
    imports: [
        SharedModule,
        CommonModule,
        CounterRoutingModule
    ],
})
export class CounterModule { }