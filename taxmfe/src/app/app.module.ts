import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { TaxdashboardComponent } from './taxdashboard/taxdashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    TaxdashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'tax/taxdashboard', component: TaxdashboardComponent }
    ])
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const ce = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('tax-element', ce);

    customElements.define('taxdashboard-element', createCustomElement(TaxdashboardComponent, { injector: this.injector }));
  }
}
