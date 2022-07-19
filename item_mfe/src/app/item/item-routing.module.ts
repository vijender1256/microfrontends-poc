import {  Routes } from '@angular/router';
import { ItemMaintenanceComponent } from './item-maintenance/item-maintenance.component';
import { ItemdashboardComponent } from './itemdashboard/itemdashboard.component';

export const ITEM_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'item-dashboard',
    pathMatch: 'full'
  },
  {
    path: 'item-dashboard',
    component: ItemdashboardComponent
  },
  {
    path: 'item-maintenance',
    component: ItemMaintenanceComponent
  }
];
