import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ParametrosCalculoFinanciamento} from "./dto/ParametrosCalculoFinanciamento";

@Component({
  selector: 'app-tabela-financiamento',
  templateUrl: './tabela-financiamento.component.html',
  styleUrls: ['./tabela-financiamento.component.css']
})
export class TabelaFinanciamentoComponent implements OnInit {

  objetoRecebido: Object = new ParametrosCalculoFinanciamento();

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras && navigation.extras.state) {
      this.objetoRecebido = navigation.extras.state.valueOf();

      localStorage.setItem('paramCalcFinc', JSON.stringify(this.objetoRecebido));
    }
  }

  ngOnInit(): void {
  }

}
