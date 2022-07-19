import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemdashboardComponent } from './itemdashboard/itemdashboard.component';
import { RouterModule } from '@angular/router';
import { ITEM_ROUTES } from './item-routing.module';
import { AuthLibModule } from '@vijender1256/auth-lib';
import { ItemMaintenanceComponent } from './item-maintenance/item-maintenance.component';

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
  imports: [
    CommonModule,
    AuthLibModule,
    FormsModule,

    // material
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

    RouterModule.forChild(ITEM_ROUTES)
  ],
  declarations: [
    ItemdashboardComponent,
    ItemMaintenanceComponent
  ]
})
export class ItemModule { }
