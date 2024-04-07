import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrorPage } from './error/error.page';

export const routes: Routes = [
    { path: 'page-not-found', component: ErrorPage, data: { type: 'notFound' } },
    { path: 'server-error', component: ErrorPage,  data: { type: 'serverError' } },
    { path: 'server-down', component: ErrorPage,  data: { type: 'serverDown' } },
    { path: '**', redirectTo: 'page-not-found' },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ErrorPagesRoutingModule { }
