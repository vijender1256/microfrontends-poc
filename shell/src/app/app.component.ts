import { getManifest } from '@angular-architects/module-federation';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventBusService } from './core/events/event-bus.service';
import { CustomManifest, CustomRemoteConfig } from './utils/config';
import { buildRoutes } from './utils/routes';
import { buildWebComponentRoutes } from './utils/web-components-routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  //remotes: CustomRemoteConfig[] = [];


  constructor(private router: Router, private eventBusService: EventBusService) { }

  async ngOnInit(): Promise<void> {
    this.eventBusService.initializeEventBus();

    const manifest = getManifest<CustomManifest>();

    // Hint: Move this to an APP_INITIALIZER 
    //  to avoid issues with deep linking
    //build Angular module routes
    let routes = buildRoutes(manifest);

    //build web components routes.
    routes = buildWebComponentRoutes(manifest, routes);

    this.router.resetConfig(routes);
    // this.remotes = Object.values(manifest);
  }

 
}
