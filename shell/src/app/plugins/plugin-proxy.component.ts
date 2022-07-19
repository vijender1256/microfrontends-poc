import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, Input, OnChanges, ViewChild, ViewContainerRef } from '@angular/core';
import { PluginOptions } from './plugin';

@Component({
  selector: 'plugin-proxy',
  template: ` <ng-container #placeHolder></ng-container> `,
})
export class PluginProxyComponent implements OnChanges {

  @ViewChild('placeHolder', { read: ViewContainerRef, static: true })
  viewContainer!: ViewContainerRef;

  constructor() { }

  @Input() options!: PluginOptions;

  async ngOnChanges(): Promise<void> {
    this.viewContainer.clear();

    const component = await loadRemoteModule(this.options).then((m) => m[this.options.componentName]);
    this.viewContainer.createComponent(component);
  }
}
