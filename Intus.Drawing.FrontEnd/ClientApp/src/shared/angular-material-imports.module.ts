import { NgModule, Injectable } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule, ErrorStateMatcher, MatRippleModule, NativeDateAdapter, DateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS, MatDialogConfig } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarConfig, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { MatRadioModule } from '@angular/material/radio';
import { MatPaginatorModule } from '@angular/material/paginator';
import { UntypedFormControl, FormGroupDirective, NgForm } from '@angular/forms';

const modules = [
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatNativeDateModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
];

@Injectable({ providedIn: 'root' })
export class AppErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: UntypedFormControl | null, _form: FormGroupDirective | NgForm | null): boolean {
        return !!control && control.invalid && control.touched;
    }
}

const appFormFieldDefaultConfig: MatFormFieldDefaultOptions = { appearance: 'fill' };
const appDialogDefaultConfig: MatDialogConfig = {
    width: '640px',
    maxWidth: 'calc(100vw - 32px)',
    maxHeight: 'calc(100vh - 32px)',
    hasBackdrop: true,
    closeOnNavigation: true,
    disableClose: true,
};
const appSnackBarDefaultConfig: MatSnackBarConfig = {
    duration: 3000,
};

@Injectable()
export class AppDateAdapter extends NativeDateAdapter {
    getFirstDayOfWeek(): number {
        return 1;
    }
}

@NgModule({
    imports: [
        ...modules,
    ],
    exports: [
        ...modules,
    ],
    providers: [
        {
            provide: ErrorStateMatcher,
            useClass: AppErrorStateMatcher,
        },
        {
            provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
            useValue: appFormFieldDefaultConfig,
        },
        {
            provide: MAT_DIALOG_DEFAULT_OPTIONS,
            useValue: appDialogDefaultConfig,
        },
        {
            provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
            useValue: appSnackBarDefaultConfig,
        },
        {
            provide: DateAdapter,
            useClass: AppDateAdapter,
        },
    ],
})
export class AngularMaterialImportsModule { }
