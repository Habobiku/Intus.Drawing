import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageRedirectGuard } from '@services/guards/homepage-redirect.guard';
import { EmptyComponent } from 'shared/components/empty/empty.component';

const routes: Routes = [
    {
        path: '',
        children: [
            { path: 'home', loadChildren: () => import('app/home/home.module').then(m => m.HomeModule)},
            { path: 'counter', loadChildren: () => import('app/counter/counter.module').then(m => m.CounterModule)},
            { path: 'shapes', loadChildren: () => import('app/shapes/shapes.module').then(m => m.ShapesModule)},
            { path: '', component: EmptyComponent, canActivate: [HomepageRedirectGuard], pathMatch: 'full' },
        ],
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            paramsInheritanceStrategy: 'always',
        }),
    ],
})
export class AppRoutingModule { }
