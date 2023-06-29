import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ParametrosCalculoFinanciamento} from "./dto/ParametrosCalculoFinanciamento";
import {TabelaFinanciamentoApiLogService} from "./services/TabelaFinanciamentoApiLogService";
import {CalculoFinanciamentoService} from "./services/CalculoFinanciamentoService";

interface Parcela {
  mes: number;
  amortizacao: number;
  juros: number;
  prestacao: number;
}

@Component({
  selector: 'app-tabela-financiamento',
  templateUrl: './tabela-financiamento.component.html',
  styleUrls: ['./tabela-financiamento.component.css']
})
export class TabelaFinanciamentoComponent implements OnInit {

  parcelas: Parcela[] = [];

  objetoRecebido: ParametrosCalculoFinanciamento = new ParametrosCalculoFinanciamento();

  constructor(private router: Router, private tabFinancService: TabelaFinanciamentoApiLogService, private calcFinanService: CalculoFinanciamentoService) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras && navigation.extras.state) {
      console.log('Valor recebido:', navigation.extras.state);
      this.objetoRecebido = {
        tabela: navigation.extras.state['objeto'].tabela,
        valor_financiado: Number(navigation.extras.state['objeto'].valor_financiado),
        tx_juros: navigation.extras.state['objeto'].tx_juros,
        meses: navigation.extras.state['objeto'].meses
      };

      console.log('Objeto recebido:', this.objetoRecebido);

      localStorage.setItem('paramCalcFinc', JSON.stringify(this.objetoRecebido));

      this.postDataToApi(this.objetoRecebido);

      this.parcelas = this.calcFinanService.calcSac(this.objetoRecebido);
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
