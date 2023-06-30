import {AfterViewInit, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ParametrosCalculoFinanciamento} from "../tabela-financiamento/dto/ParametrosCalculoFinanciamento";

@Component({
  selector: 'app-sac',
  templateUrl: './sac-content.component.html',
  styleUrls: ['./sac-content.component.css']
})

export class SacContentComponent implements AfterViewInit, OnInit {

  @Output() formSacDataSend = new EventEmitter<ParametrosCalculoFinanciamento>();
  @Output() isValid = new EventEmitter<any>();

  formSacData: FormGroup = new FormGroup({});

  paramCalcFin: ParametrosCalculoFinanciamento = new ParametrosCalculoFinanciamento();

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.formSacData = this.formBuilder.group({
      valor_financiado: ['', [Validators.required, Validators.pattern(/^\d+(,\d{1,2})?$/)]],
      taxa_juros: ['', [Validators.required, Validators.pattern(/^[0-9]+(\.[0-9]{1,2})?%?$/)]],
      meses: ['', [Validators.required, Validators.max(420), Validators.min(0)]]
    })
  }

  ngAfterViewInit() {
    this.formSacDataSend.emit(this.paramCalcFin);
  }

  validateCampoValorFinanciado() {
    // @ts-ignore
    this.formSacData.get('valor_financiado').updateValueAndValidity();
  }

  validateCampoTxJuros() {
    // @ts-ignore
    this.formSacData.get('taxa_juros').updateValueAndValidity();
  }

  validateCampoMeses() {
    // @ts-ignore
    this.formSacData.get('meses').updateValueAndValidity();
  }

  validForm() {
    if (this.formSacData.valid) {
      this.paramCalcFin.tabela = 'SAC';
      this.paramCalcFin.valor_financiado = this.formSacData.get('valor_financiado')?.value;
      this.paramCalcFin.tx_juros = this.formSacData.get('taxa_juros')?.value;
      this.paramCalcFin.meses = this.formSacData.get('meses')?.value;
      this.formSacDataSend.emit(this.paramCalcFin);
      this.isValid.emit(!this.formSacData.valid);
    }
  }
}
