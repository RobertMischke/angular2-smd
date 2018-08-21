import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {CommonModule} from '@angular/common';
import {MatDialogModule, MatButtonModule, MatIconModule, MatRadioModule, MatTooltipModule, MatRippleModule} from '@angular/material';

import {
    SmdDataTableComponent,
    SmdDatatableTitleComponent,
    SmdDatatableHeaderComponent,
    SmdDatatableActionButtonComponent,
    SmdContextualDatatableButtonComponent,
    SmdDataTableColumnComponent,
    SmdDataTableRowComponent,
    SmdDataTableCellDirective,
    SmdDataTableClickableDirective,
    SmdDatatableDialogChangeValueComponent,
    SmdPaginatorComponent,
    SmdFabSpeedDialTriggerComponent,
    SmdFabSpeedDialActionsComponent,
    SmdFabSpeedDialComponent,
    SmdErrorMessageDirective,
    SmdErrorMessagesComponent
} from './component';

let COMPONENTS = [
    SmdDataTableComponent,
    SmdDatatableTitleComponent,
    SmdDatatableHeaderComponent,
    SmdDatatableActionButtonComponent,
    SmdContextualDatatableButtonComponent,
    SmdDataTableColumnComponent,
    SmdDataTableRowComponent,
    SmdDataTableCellDirective,
    SmdDataTableClickableDirective,
    SmdDatatableDialogChangeValueComponent,
    SmdPaginatorComponent,
    SmdFabSpeedDialTriggerComponent,
    SmdFabSpeedDialActionsComponent,
    SmdFabSpeedDialComponent,
    SmdErrorMessageDirective,
    SmdErrorMessagesComponent
];

let IMPORTS = [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule, MatButtonModule, MatIconModule, MatRadioModule, MatTooltipModule, MatRippleModule
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
            MatDialogModule, MatButtonModule, MatIconModule, MatRadioModule, MatTooltipModule, MatRippleModule,
            ComponentsModule,
            ...imports
        ]
    }

}
