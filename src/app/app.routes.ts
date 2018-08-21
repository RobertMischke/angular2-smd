import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import {DemoDatatableComponent} from './app-demo/datatable/demo-datatable';
import {DemoFabSpeedDialComponent} from './app-demo/fab-speed-dial/demo-fab-speed-dial';
import {DemoHomeComponent} from './app-demo/demo.home';
import {DemoErrorMessagesComponent} from './app-demo/error-messages/demo-error-messages';

const appRoutes: Routes = [
  { path: '', redirectTo: '/demo-home', pathMatch: 'full' },
  { path: 'demo-home', component: DemoHomeComponent },
  { path: 'demo-datatable', component: DemoDatatableComponent },
  { path: 'demo-fab-speed-dial', component: DemoFabSpeedDialComponent },
  { path: 'demo-error-messages', component: DemoErrorMessagesComponent }
];

export const appRoutingProviders: any[] = [
  { provide: APP_BASE_HREF, useValue: '/angular-smd' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true} );
