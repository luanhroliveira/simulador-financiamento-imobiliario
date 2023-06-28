import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ParametrosCalculoFinanciamento} from "./dto/ParametrosCalculoFinanciamento";
import {TabelaFinanciamentoService} from "./services/TabelaFinanciamentoService";

@Component({
  selector: 'app-tabela-financiamento',
  templateUrl: './tabela-financiamento.component.html',
  styleUrls: ['./tabela-financiamento.component.css']
})
export class TabelaFinanciamentoComponent implements OnInit {

  objetoRecebido: Object = new ParametrosCalculoFinanciamento();

  constructor(private router: Router, private tabFinancService: TabelaFinanciamentoService) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras && navigation.extras.state) {
      this.objetoRecebido = navigation.extras.state.valueOf();

      localStorage.setItem('paramCalcFinc', JSON.stringify(this.objetoRecebido));

      this.postDataToApi(this.objetoRecebido);
    }
  }

  async postDataToApi(data: any): Promise<void> {
    try {
      const response = await this.tabFinancService.postData(data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  ngOnInit(): void {
  }

}
