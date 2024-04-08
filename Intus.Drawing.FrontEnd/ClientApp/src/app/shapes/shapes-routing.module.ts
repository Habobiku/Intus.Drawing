import { RouterModule, Routes } from "@angular/router";
import { ShapesMainPage } from "./pages/main/main.page";
import { NgModule } from "@angular/core";
import { RectangleResolver } from "@services/resolvers/rectangle.resolver";
import { RectanglePage } from "./pages/rectangle/rectangle.page";

const routes: Routes = [
    {
        path: '',
        title: 'Shapes',
        component: ShapesMainPage,
        children: [
            {
                path: 'rectangle',
                component: RectanglePage,
                resolve: {
                    rectangle: RectangleResolver,
                },
            },
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'rectangle',
            }
        ]
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ShapesRoutingModule { }