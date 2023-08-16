import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContrySevices } from '../../services/contries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-contry-page',
  templateUrl: './contry-page.component.html',
  styles: [],
})
export class ContryPageComponent implements OnInit {


  public country?: Country;

  constructor(
    private activatedRouer: ActivatedRoute,
    private router: Router,
    private contryServices: ContrySevices,
    ) {}


  ngOnInit(): void {
    this.activatedRouer.params
    .pipe(
      switchMap(({id}) => this.contryServices.searchCountryByAlphaCode(id) )
    )
    .subscribe((resp) => {
        if(!resp)  return this.router.navigateByUrl('')
        return this.country= resp
        
    });
  }


}
