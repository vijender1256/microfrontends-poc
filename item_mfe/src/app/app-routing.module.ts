import {  Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: 'item',
    loadChildren: () => import('./item/item.module')
      .then(m => m.ItemModule)
  }
];

