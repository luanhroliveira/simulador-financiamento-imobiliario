import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

declare const M: any;

@Component({
  selector: 'app-land-page',
  templateUrl: './land-page.component.html',
  styleUrls: ['./land-page.component.css']
})
export class LandPageComponent implements OnInit {

  imageURL: string = 'http://lorempixel.com.br/000/000';
  // imageURL: string = 'https://loremflickr.com/640/360';

  dadosSacRecebido: any;
  formIsInvalid: boolean | undefined;

  constructor(private router: Router) {
  }

  openModal(): void {
    this.formIsInvalid = true;
    const modal = document.querySelector('#sac-content');
    M.Modal.init(modal);
    M.Modal.getInstance(modal).open();
  }

  receberDadosSac(obj: any) {
    this.dadosSacRecebido = obj;
  }

  enviarDadosSac() {
    const objeto = this.dadosSacRecebido.value;
    const sac = ""
    this.router.navigate(
      ['/tabFinanciamento'],
      { state: { objeto } }
    );
  }

  ngOnInit(): void {
  }

  getBackgroundImage() {
    return {
      'background-image':
        'linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .9)), url(' +
        this.imageURL +
        ')',
    };
  }

  recebeValidacaoForm(obj: any) {
    this.formIsInvalid = obj;
  }
}
