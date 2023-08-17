import { Component } from '@angular/core';
import { ContrySevices } from '../../services/contries.service';
import { Country } from '../../interfaces/country';

type Region= 'Africa'| 'Americas'| 'Asia'| 'Europe'| 'Oceania'
@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {

  public region : Country[]=[]

  public regions: Region[]= ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  public selectedRegion?: Region;

  constructor( public countryServices: ContrySevices){

  }

  searchRegion(term: Region){

    this.selectedRegion= term;
    this.countryServices.searchRegion(term)
    .subscribe(region=>{
      this.region = region
    })
  }
}
