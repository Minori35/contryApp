import { Component, OnInit } from '@angular/core';
import { ContrySevices } from '../../services/contries.service';
import { Country } from '../../interfaces/country';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent implements OnInit
 {

  public region : Country[]=[]

  public regions: Region[]= ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  public selectedRegion?: Region;

  constructor( public countryServices: ContrySevices){

  }
  ngOnInit(): void {
    this.region = this.countryServices.cacheStore.byRegion.country;
    this.selectedRegion=this.countryServices.cacheStore.byRegion.region;
  }

  searchRegion(term: Region){

    this.selectedRegion= term;
    this.countryServices.searchRegion(term)
    .subscribe(region=>{
      this.region = region
    })
  }
}
