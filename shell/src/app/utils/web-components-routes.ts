import { startsWith, WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';
import { Routes } from '@angular/router';
import { APP_ROUTES } from '../app-routing.module';
import { CustomManifest } from './config';

export function buildWebComponentRoutes(options: CustomManifest, routes: Routes): Routes {

  const lazyWebCompRoutes: Routes = [
    {
      path: 'react',
      component: WebComponentWrapper,
      data: {
        remoteEntry: 'https://witty-wave-0a695f710.azurestaticapps.net/remoteEntry.js',
        remoteName: 'react',
        exposedModule: './web-components',
        elementName: 'react-element'
      } as WebComponentWrapperOptions
    },
    {
      matcher: startsWith('tax'),
      component: WebComponentWrapper,
      data: {
        remoteEntry: 'http://localhost:4203/remoteEntry.js',
        remoteName: 'taxmfe',
        exposedModule: './web-components',
        elementName: 'tax-element'
      } as WebComponentWrapperOptions
    }
    //{
    //  matcher: startsWith('angular3'),
    //  component: WebComponentWrapper,
    //  data: {
    //    remoteEntry: 'http://localhost:4202/remoteEntry.js',
    //    remoteName: 'angular3',
    //    exposedModule: './web-components',
    //    elementName: 'angular3-element'
    //  } as WebComponentWrapperOptions
    //}
  ];


  return [...APP_ROUTES, ...routes, ...lazyWebCompRoutes];
}
