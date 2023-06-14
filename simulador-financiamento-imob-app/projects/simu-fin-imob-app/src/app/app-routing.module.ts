import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandPageComponent } from './land-page/land-page.component';
import {SacContentComponent} from "./sac-content/sac-content.component";
import {TabelaFinanciamentoComponent} from "./tabela-financiamento/tabela-financiamento.component";

const routes: Routes = [
  { path: '', component: LandPageComponent },
  { path: 'sac', component: SacContentComponent },
  { path: 'tabFinanciamento', component: TabelaFinanciamentoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
