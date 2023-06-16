export class ParametrosCalculoFinanciamento {

  private _tabela: string = '';
  private _valor_financiado: number = 0;
  private _tx_juros: string = '';
  private _meses: number = 0;

  constructor() {
  }

  get tabela(): string {
    return this._tabela;
  }

  set tabela(value: string) {
    this._tabela = value;
  }

  get valor_financiado(): number {
    return this._valor_financiado;
  }

  set valor_financiado(value: number) {
    this._valor_financiado = value;
  }

  get tx_juros(): string {
    return this._tx_juros;
  }

  set tx_juros(value: string) {
    this._tx_juros = value;
  }

  get meses(): number {
    return this._meses;
  }

  set meses(value: number) {
    this._meses = value;
  }
}
