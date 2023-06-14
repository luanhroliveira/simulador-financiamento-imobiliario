import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

declare const M: any;

@Component({
  selector: 'app-sac',
  templateUrl: './sac-content.component.html',
  styleUrls: ['./sac-content.component.css']
})


export class SacContentComponent implements OnInit {
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

  ngOnInit(): void {

  }
}
