import { NgModule } from "@angular/core";
import { CounterRoutingModule } from "./counter-routing.module";
import { CounterPage } from "./counter.component";
import { SharedModule } from "shared/shared.module";


@NgModule({
    declarations: [
        CounterPage,
    ],
    imports: [
        CounterRoutingModule,
        SharedModule
    ],
})
export class CounterModule { }