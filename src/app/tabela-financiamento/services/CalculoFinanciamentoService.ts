import {Injectable} from '@angular/core';
import {ParametrosCalculoFinanciamento} from "../dto/ParametrosCalculoFinanciamento";

interface Parcela {
  mes: number;
  amortizacao: number;
  juros: number;
  prestacao: number;
}

@Injectable({
  providedIn: 'root'
})
export class CalculoFinanciamentoService {

  constructor() {
  }

  calcSac(parametros: ParametrosCalculoFinanciamento): Parcela[] {
    const { valor_financiado, meses } = parametros as ParametrosCalculoFinanciamento;
    const taxaJurosAnual = parseFloat(parametros.tx_juros) / 100;
    const taxaJurosMensal = taxaJurosAnual / 12;
    const amortizacao = valor_financiado / meses;
    const parcelas: Parcela[] = [];

    let saldoDevedor = valor_financiado;
    let mes = 1;

    while (saldoDevedor > 0) {
      const juros = saldoDevedor * taxaJurosMensal;
      const prestacao = amortizacao + juros;
      saldoDevedor -= amortizacao;

      parcelas.push({
        mes,
        amortizacao,
        juros,
        prestacao,
      });

      mes++;
    }

    return parcelas;
  }
}
