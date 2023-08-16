import { Component } from '@angular/core';
import { ContrySevices } from '../../services/contries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-contry-page',
  templateUrl: './by-contry-page.component.html',
  styles: [
  ]
})
export class ByContryPageComponent {

  public pais: Country[]=[];
  constructor(public servicesCountry: ContrySevices){

  }

  searchPais(term: string){
    this.servicesCountry.searchName(term)
    .subscribe( pais =>{
      this.pais = pais;
      console.log("🚀 ~ file: by-contry-page.component.ts:22 ~ ByContryPageComponent ~ searchPais ~ this.pais:", this.pais)

    })


  }
}
