import { Component, OnInit } from '@angular/core';

declare const M: any;

@Component({
  selector: 'app-land-page',
  templateUrl: './land-page.component.html',
  styleUrls: ['./land-page.component.css']
})
export class LandPageComponent implements OnInit {

  imageURL: string = 'http://lorempixel.com.br/000/000';
  // imageURL: string = 'https://loremflickr.com/640/360';
  isHidePanel = true;

  constructor() { }

  openModal(): void {
    const modal = document.querySelector('#sac-content');
    M.Modal.init(modal);
    M.Modal.getInstance(modal).open();
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
}
