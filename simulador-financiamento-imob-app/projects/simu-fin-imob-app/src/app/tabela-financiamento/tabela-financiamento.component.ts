import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-tabela-financiamento',
  templateUrl: './tabela-financiamento.component.html',
  styleUrls: ['./tabela-financiamento.component.css']
})
export class TabelaFinanciamentoComponent implements OnInit {

  objetoRecebido: any;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras && navigation.extras.state) {
      this.objetoRecebido = navigation.extras.state.valueOf();
    }
  }

  ngOnInit(): void {
  }

}
