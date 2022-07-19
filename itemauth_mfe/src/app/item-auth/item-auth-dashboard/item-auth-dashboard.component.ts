import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthLibService } from '@vijender1256/auth-lib';
declare const require: any;

export interface ItemAuthElement {
  description: string;
  itemCode: number;
  sellPermission: string;
  store: number;
  actionItems: ItemAction[];
}

export interface ItemAction {
  displayName: string;
  routerLink: string;
}

const actionItems: ItemAction[] = [
  { displayName: "Item Maintenance", routerLink: 'item/item-maintenance' },
  { displayName: "Item Authorization", routerLink: 'itemAuth/itemauth-maintenance' }
];

const ELEMENT_DATA: ItemAuthElement[] = [
  { itemCode: 1714, description: 'MC & CHEESE', store: 13, sellPermission: 'Y', actionItems: actionItems },
  { itemCode: 23864, description: 'CEREALS', store: 4, sellPermission: 'Y', actionItems: actionItems },
  { itemCode: 1258, description: 'ALFREDO SAUSE', store: 1200, sellPermission: 'N', actionItems: actionItems },
  { itemCode: 12, description: 'CHILLI POWDER', store: 1270, sellPermission: 'Y', actionItems: actionItems },
  { itemCode: 265895, description: 'BLACK PEPPER', store: 36, sellPermission: 'N', actionItems: actionItems },
  { itemCode: 565478, description: 'PIZZA RONI', store: 56, sellPermission: 'N', actionItems: actionItems },
  { itemCode: 1712, description: 'TOTILLAS', store: 1245, sellPermission: 'Y', actionItems: actionItems },
  { itemCode: 22, description: 'FISH', store: 22, sellPermission: 'N', actionItems: actionItems },
  { itemCode: 1816, description: 'CHICKEN TENDERS', store: 6, sellPermission: 'Y', actionItems: actionItems },
  { itemCode: 23456, description: 'KETCHUP', store: 12, sellPermission: 'Y', actionItems: actionItems },
];

@Component({
  selector: 'app-item-auth-dashboard',
  templateUrl: './item-auth-dashboard.component.html',
  styleUrls: ['./item-auth-dashboard.component.scss']
})
export class ItemAuthDashboardComponent implements OnInit {
  ngVersion = require('../../../../package.json').dependencies['@angular/core'];
  user = '';

  displayedColumns: string[] = ['itemCode', 'description', 'store', 'sellPermission', 'actionsColumn'];
  dataSourceItm = ELEMENT_DATA.sort((a, b) => a.itemCode - b.itemCode);

  constructor(auth: AuthLibService, private router: Router) {
    this.user = auth.user;
  }

  ngOnInit(): void {
  }

  redirect(routelink: string, itemCode: number): void {
    let url = routelink.replace("/itemCode", "")
    this.router.navigate([url], {
      queryParams: {
        itemCode: itemCode
      }
    });
  }

}
