import { Routes } from '@angular/router';
import { ItemAuthDashboardComponent } from './item-auth-dashboard/item-auth-dashboard.component';
import { ItemAuthorizationComponent } from './item-authorization/item-authorization.component';

export const ITEM_AUTH_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'itemauth-dashboard',
    pathMatch: 'full'
  },
  {
    path: 'itemauth-dashboard',
    component: ItemAuthDashboardComponent
  },
  {
    path: 'itemauth-maintenance',
    component: ItemAuthorizationComponent
  }
];
