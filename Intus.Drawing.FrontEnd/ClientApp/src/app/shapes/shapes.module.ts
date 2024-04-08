import { NgModule } from "@angular/core";
import { SharedModule } from "shared/shared.module";
import { ShapesMainPage } from "./pages/main/main.page";
import { ShapesRoutingModule } from "./shapes-routing.module";
import { RectanglePage } from "./pages/rectangle/rectangle.page";
import { ResizableModule } from "angular-resizable-element";

@NgModule({
    imports: [
        SharedModule,
        ShapesRoutingModule,
        ResizableModule,
    ],
    declarations: [
        ShapesMainPage,
        RectanglePage
    ],
})
export class ShapesModule { }