import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-by-capital-pages',
  templateUrl: './by-capital-pages.component.html',
  styles: [
  ]
})
export class ByCapitalPagesComponent {

  searByCapital(term: any){
    console.log('Desde ByCapitalPage');
    console.log(term);
    

  }

 

}
