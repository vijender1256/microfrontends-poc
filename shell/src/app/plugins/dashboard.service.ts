import { Injectable } from '@angular/core';
import { PluginOptions } from './plugin';

@Injectable({ providedIn: 'root' })
export class DashboardService {
  lookup(): Promise<PluginOptions[]> {
    // This configuration could also be retrieved via an http call and cached to be more dynamic
    return Promise.resolve([
      {
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './ItemDashCmp',
        type: 'module',
        displayName: 'Item Dashboard',
        componentName: 'ItemdashboardComponent',
        filterName: 'Item'
      },
      {
        remoteEntry: 'http://localhost:4202/remoteEntry.js',
        exposedModule: './AuthDashCmp',
        type: 'module',
        displayName: 'Authorization Dashboard',
        componentName: 'ItemAuthDashboardComponent',
        filterName: 'Auth'
      }
    ] as PluginOptions[]);
  }
}
