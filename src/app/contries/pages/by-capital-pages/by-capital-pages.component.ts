import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { ContrySevices } from '../../services/contries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-pages',
  templateUrl: './by-capital-pages.component.html',
  styles: [],
})
export class ByCapitalPagesComponent implements OnInit{
  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue : string= "";

  
  constructor(private constriesServcices: ContrySevices) {}


  ngOnInit(): void {
    this.countries = this.constriesServcices.cacheStore.byCapital.country;
    this.initialValue= this.constriesServcices.cacheStore.byCapital.term;
    console.log("🚀 ~ file: by-capital-pages.component.ts:22 ~ ByCapitalPagesComponent ~ ngOnInit ~ this.initialValue:", this.initialValue)
  }

  searByCapital(term: any) {
    this.isLoading = true;

    this.constriesServcices.searchCapital(term).subscribe((contries) => {
      this.countries = contries;
      console.log(this.countries);
      this.isLoading = false;
    });
  }
}
