import { NgModule } from '@angular/core';
import { AngularMaterialImportsModule } from './angular-material-imports.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { pipes } from './pipes';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const modules = [
    CommonModule,
    RouterModule,
    AngularMaterialImportsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
];

@NgModule({
    imports: [
        ...modules,
    ],
    declarations: [
        ...pipes,
    ],
    exports: [
        ...modules,
        ...pipes,
    ]
})
export class SharedModule { }
