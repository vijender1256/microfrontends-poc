import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare const require: any;
import { AuthLibService } from '@vijender1256/auth-lib';
import { IncrementerService } from '../../services/incrementer.service';

export interface ItemElement {
  description: string;
  itemCode: number;
  buyerName: string;
  itemSize: number;
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

const ELEMENT_DATA: ItemElement[] = [
  { itemCode: 1714, description: 'MC & CHEESE', itemSize: 1.0079, buyerName: 'Chris Walter', actionItems: actionItems },
  { itemCode: 23864, description: 'CEREALS', itemSize: 4.0026, buyerName: 'John Stark', actionItems: actionItems },
  { itemCode: 1258, description: 'ALFREDO SAUSE', itemSize: 6.941, buyerName: 'Edward snowden', actionItems: actionItems },
  { itemCode: 12, description: 'CHILLI POWDER', itemSize: 9.0122, buyerName: 'King Charles', actionItems: actionItems },
  { itemCode: 265895, description: 'BLACK PEPPER', itemSize: 10.811, buyerName: 'Ashoka', actionItems: actionItems },
  { itemCode: 565478, description: 'PIZZA RONI', itemSize: 12.0107, buyerName: 'Jose Annette', actionItems: actionItems },
  { itemCode: 1712, description: 'TOTILLAS', itemSize: 14.0067, buyerName: 'Julie Stewart', actionItems: actionItems },
  { itemCode: 22, description: 'FISH', itemSize: 15.9994, buyerName: 'Jonathan Prime', actionItems: actionItems },
  { itemCode: 1816, description: 'CHICKEN TENDERS', itemSize: 18.9984, buyerName: 'Eleven', actionItems: actionItems },
  { itemCode: 23456, description: 'KETCHUP', itemSize: 20.1797, buyerName: 'Peter Heinz', actionItems: actionItems },
];

@Component({
  selector: 'app-itemdashboard',
  templateUrl: './itemdashboard.component.html',
  styleUrls: ['./itemdashboard.component.scss']
})
export class ItemdashboardComponent implements OnInit {
  ngVersion = require('../../../../package.json').dependencies['@angular/core'];
  user = '';

  internalCount = 0;

  displayedColumns: string[] = ['itemCode', 'description', 'buyerName', 'itemSize', 'actionsColumn'];
  dataSourceItm = ELEMENT_DATA.sort((a, b) => a.itemCode - b.itemCode);

  //If we use angular elements to bind this component into shell then we can do two way communications.
  @Input() set counter(value: number) {
    this.internalCount = value;
  }

  constructor(auth: AuthLibService, private incrementerService: IncrementerService, private router: Router) {
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

  increment(): void {
    this.internalCount++;
    this.incrementerService.broadcastCount(this.internalCount);
  }

  success(): void {
    this.incrementerService.broadcastSuccess();
  }

  error(): void {
    this.incrementerService.broadcastError();
  }

  warning(): void {
    this.incrementerService.broadcastWarning();
  }

}
