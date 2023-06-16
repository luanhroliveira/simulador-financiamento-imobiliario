import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MenuComponent} from './menu/menu.component';
import {FooterComponent} from './footer/footer.component';
import {LandPageComponent} from './land-page/land-page.component';
import {SacContentComponent} from './sac-content/sac-content.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TabelaFinanciamentoComponent} from './tabela-financiamento/tabela-financiamento.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    LandPageComponent,
    SacContentComponent,
    TabelaFinanciamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
