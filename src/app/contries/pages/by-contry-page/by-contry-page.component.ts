import { Component, OnInit,Output, EventEmitter} from '@angular/core';
import { ContrySevices } from '../../services/contries.service';
import { Country } from '../../interfaces/country';
import { Subject, Subscription, debounceTime, pipe } from 'rxjs';


@Component({
  selector: 'app-by-contry-page',
  templateUrl: './by-contry-page.component.html',
  styles: [
  ]
})
export class ByContryPageComponent implements OnInit{


  
  @Output()
  public onDebouce = new EventEmitter<string>()

  public pais: Country[]=[];
  public isLoading: boolean = false;
  public initialValue : string= "";

  constructor(public servicesCountry: ContrySevices){

  }

  ngOnInit(): void {
    
    this.pais = this.servicesCountry.cacheStore.byCapital.country;
    this.initialValue= this.servicesCountry.cacheStore.byCapital.term;
    console.log("🚀 ~ file: by-contry-page.component.ts:35 ~ ByContryPageComponent ~ ngOnInit ~ this.initialValue:", this.initialValue)
  }

  searchPais(term: string){
    this.isLoading = true;
    this.servicesCountry.searchName(term).subscribe( pais =>{
      this.pais = pais;
      this.isLoading = false;

    })


  }
}
