import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalPagesComponent } from './pages/by-capital-pages/by-capital-pages.component';
import { ByContryPageComponent } from './pages/by-contry-page/by-contry-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { ContryPageComponent } from './pages/contry-page/contry-page.component';
import { CountriesRoutingModule } from './contries-routing.module';
import { SearchBoxComponent } from '../shared/components/search-box/search-box.component';
import { SharedModule } from '../shared/shared.module';
import { ContryTableComponent } from './components/contry-table/contry-table.component';



@NgModule({
  declarations: [
    ByCapitalPagesComponent,
    ByContryPageComponent,
    ByRegionPageComponent,
    ContryPageComponent,
    ContryTableComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    SharedModule,
  ]
})
export class ContriesModule { }
