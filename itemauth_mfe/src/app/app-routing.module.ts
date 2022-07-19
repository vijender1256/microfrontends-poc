import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: 'itemAuth',
    loadChildren: () => import('./item-auth/item-auth.module')
      .then(m => m.ItemAuthModule)
  }
];

