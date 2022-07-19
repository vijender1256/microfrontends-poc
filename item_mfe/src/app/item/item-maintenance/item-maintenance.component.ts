import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-item-maintenance',
  templateUrl: './item-maintenance.component.html',
  styleUrls: ['./item-maintenance.component.scss']
})
export class ItemMaintenanceComponent implements OnInit {

  itemCode = 0;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.itemCode = params['itemCode'];
      });
  }


  navigate() {
    this.router.navigate(['/item/item-dashboard']);
  }
}
