import { HomePage } from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { NgModule } from "@angular/core";
import { SharedModule } from "shared/shared.module";

@NgModule({
    declarations: [
        HomePage
    ],
    imports: [
        HomeRoutingModule,
        SharedModule
    ],
})
export class HomeModule { }