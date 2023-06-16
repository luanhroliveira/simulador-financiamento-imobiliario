import {AfterViewInit, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-sac',
  templateUrl: './sac-content.component.html',
  styleUrls: ['./sac-content.component.css']
})

export class SacContentComponent implements AfterViewInit, OnInit {

  @Output() formSacDataSend = new EventEmitter<any>();
  @Output() isValid = new EventEmitter<any>();

  formSacData: FormGroup = new FormGroup({});

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
    this.formSacDataSend.emit(this.formSacData);
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
    this.isValid.emit(this.formSacData.invalid);
  }
}
