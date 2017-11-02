import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {CommonModule} from '@angular/common';
import {MatDialogModule, MatButtonModule, MatIconModule, MatRadioModule} from '@angular/material';

import {
    SmdDataTableComponent,
    SmdDatatableHeaderComponent,
    SmdDatatableActionButtonComponent,
    SmdContextualDatatableButtonComponent,
    SmdDataTableColumnComponent,
    SmdDataTableRowComponent,
    SmdDataTableCellDirective,
    SmdDatatableDialogChangeValueComponent,
    SmdPaginatorComponent,
    SmdFabSpeedDialTriggerComponent,
    SmdFabSpeedDialActionsComponent,
    SmdFabSpeedDialComponent,
    SmdBottomNavLabelDirective,
    SmdBottomNavGroupComponent,
    SmdBottomNavComponent,
    SmdErrorMessageDirective,
    SmdErrorMessagesComponent
} from './component';

let COMPONENTS = [
    SmdDataTableComponent,
    SmdDatatableHeaderComponent,
    SmdDatatableActionButtonComponent,
    SmdContextualDatatableButtonComponent,
    SmdDataTableColumnComponent,
    SmdDataTableRowComponent,
    SmdDataTableCellDirective,
    SmdDatatableDialogChangeValueComponent,
    SmdPaginatorComponent,
    SmdFabSpeedDialTriggerComponent,
    SmdFabSpeedDialActionsComponent,
    SmdFabSpeedDialComponent,
    SmdBottomNavLabelDirective,
    SmdBottomNavGroupComponent,
    SmdBottomNavComponent,
    SmdErrorMessageDirective,
    SmdErrorMessagesComponent
];

let IMPORTS = [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    MatDialogModule, MatButtonModule, MatIconModule, MatRadioModule
];

@NgModule({
    imports: IMPORTS,
    declarations: COMPONENTS,
    exports: COMPONENTS,
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    entryComponents: [SmdDatatableDialogChangeValueComponent]
})
export class ComponentsModule {

    static forRoot(...imports: any[]): any[] {
        return [
            CommonModule,
            HttpModule,
            FormsModule,
            ReactiveFormsModule,
            BrowserModule,
            MatDialogModule, MatButtonModule, MatIconModule, MatRadioModule,
            ComponentsModule,
            ...imports
        ]
    }

}
