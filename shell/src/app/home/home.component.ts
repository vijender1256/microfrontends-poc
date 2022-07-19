import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthLibService } from '@vijender1256/auth-lib';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { fromEvent } from 'rxjs/internal/observable/fromEvent';
import { DashboardService } from '../plugins/dashboard.service';
import { PluginOptions } from '../plugins/plugin';

interface Dashboard {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  userName = '';
  plugins: PluginOptions[] = [];
  components: PluginOptions[] = [];

  count$ = new BehaviorSubject(0);

  dashboards: Dashboard[] = [
    { value: 'Item', viewValue: 'Item Dashboard' },
    { value: 'Auth', viewValue: 'Item Authorization' }
  ];

  constructor(private authService: AuthLibService, private dashboardService: DashboardService) { }


  async ngOnInit(): Promise<void> {
    this.plugins = await this.dashboardService.lookup();
  }

  login() {
    this.authService.login(this.userName, "");
  }

  onChangeDashboard(value: any) {
    this.components = [];
    //based on the login name we need to load the component dashboard.
    const component = this.plugins.find((obj) => { return obj.filterName === value; });
    this.components.push(component as PluginOptions);
  }


  ngAfterViewInit() {
    //addEventListener('clean-counter', (event) => { this.setCounter(event as CustomEvent); });
    fromEvent<CustomEvent>(window, 'clean-counter').subscribe((e) => this.setCounter(e));
  }

  setCounter(event: CustomEvent) {
    this.count$.next(event?.detail?.counter);
  }

  //After increment if we use the angualar element to bind into the shell then we can make the two way communication.
  increment() {
    const current = this.count$.getValue() + 1;
    this.count$.next(current);
  }

  ngOnDestroy() {
    //removeEventListener('clean-counter', (event: CustomEvent) => { });
  }
}
