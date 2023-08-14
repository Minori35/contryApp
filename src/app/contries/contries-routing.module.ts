import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByCapitalPagesComponent } from './pages/by-capital-pages/by-capital-pages.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { ContryPageComponent } from './pages/contry-page/contry-page.component';
import { ByContryPageComponent } from './pages/by-contry-page/by-contry-page.component';


const routes : Routes=[
    {
        path: 'by-capital',
        component : ByCapitalPagesComponent,
    },
    {
        path: 'by-contry',
        component : ByContryPageComponent,
    },
    {
        path: 'by-region',
        component : ByRegionPageComponent,
    },
    {
        path: 'by/:id',
        component : ContryPageComponent
    },
     
  {
    path : '**',
    redirectTo : 'by-capital'
  }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
        ],
    providers: [],
})
export class CountriesRoutingModule { }
