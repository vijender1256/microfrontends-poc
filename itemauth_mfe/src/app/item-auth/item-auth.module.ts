import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemAuthDashboardComponent } from './item-auth-dashboard/item-auth-dashboard.component';
import { RouterModule } from '@angular/router';
import { ITEM_AUTH_ROUTES } from './item-auth-routing.module';
import { AuthLibModule } from '@vijender1256/auth-lib';
import { ItemAuthorizationComponent } from './item-authorization/item-authorization.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ItemAuthDashboardComponent,
    ItemAuthorizationComponent
  ],
  imports: [
    CommonModule,
    AuthLibModule,
    FormsModule,

    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatSelectModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,


    RouterModule.forChild(ITEM_AUTH_ROUTES)
  ]
})
export class ItemAuthModule { }
