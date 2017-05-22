import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {routing, appRoutingProviders} from './app.routes';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ComponentsModule} from './shared/components.module';
import {DemoDatatableComponent} from './app-demo/datatable/demo-datatable';
import {DemoHomeComponent} from './app-demo/demo.home';
import {DemoFabSpeedDialComponent} from './app-demo/fab-speed-dial/demo-fab-speed-dial';
import {DemoBottomNavComponent} from './app-demo/bottom-nav/demo-bottom-nav';
import {DemoErrorMessagesComponent} from './app-demo/error-messages/demo-error-messages';

let COMPONENTS = [
    DemoHomeComponent,
    DemoDatatableComponent,
    DemoFabSpeedDialComponent,
    DemoBottomNavComponent,
    DemoErrorMessagesComponent,
    AppComponent
];

@NgModule({
    imports: [
        BrowserAnimationsModule,
        ComponentsModule.forRoot(routing)
    ],
    declarations: COMPONENTS,
    providers: [appRoutingProviders],
    bootstrap: [AppComponent],
    schemas : [CUSTOM_ELEMENTS_SCHEMA],
    entryComponents: []
})
export class AppModule {
}
