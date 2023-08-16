import { Component } from '@angular/core';
import { ContrySevices } from '../../services/contries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {

  public region : Country[]=[]
  constructor( public countryServices: ContrySevices){

  }

  searchRegion(term: string){
    this.countryServices.searchRegion(term)
    .subscribe(region=>{
      this.region = region
    })
  }
}
