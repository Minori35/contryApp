import { Component, ElementRef, ViewChild } from '@angular/core';
import { ContrySevices } from '../../services/contries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-pages',
  templateUrl: './by-capital-pages.component.html',
  styles: [
  ]
})
export class ByCapitalPagesComponent {

  public countries :Country[] =[]

  constructor( private constriesServcices : ContrySevices){}


  searByCapital(term: any){
    this.constriesServcices.searchCapital(term)
    .subscribe( contries =>{
      this.countries = contries
      console.log(this.countries);
      
    } )

  }

 

}
