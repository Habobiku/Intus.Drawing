import { NgModule } from "@angular/core";
import { CounterPage } from "./counter.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path: '',
        component: CounterPage,
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CounterRoutingModule { }