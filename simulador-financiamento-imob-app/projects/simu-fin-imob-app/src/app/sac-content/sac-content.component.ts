import {AfterViewInit, Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-sac',
  templateUrl: './sac-content.component.html',
  styleUrls: ['./sac-content.component.css']
})

export class SacContentComponent implements AfterViewInit {

  @Output() formSacDataSend = new EventEmitter<any>();

  formSacData: {
    meses: number;
    taxaJurosAnual: number;
    valor_financiado: number
  };

  constructor() {
    this.formSacData = {
      valor_financiado: 0,
      meses: 0,
      taxaJurosAnual: 0
    }
  }

  ngAfterViewInit() {
    this.formSacDataSend.emit(this.formSacData);
  }
}
