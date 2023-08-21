import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of , delay, tap} from 'rxjs';
import { Country } from '../interfaces/country';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({providedIn: 'root'})
export class ContrySevices {

    private apiUrl : string ='https://restcountries.com/v3.1'

    private saveToLocalStorage(){
        localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore) )
    }

    private leadFromLocalStorage(){
        if(!localStorage.getItem('cacheStore')) return;

        this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!)
    }   

    public cacheStore: CacheStore ={
        byCapital:{term : '', country:[]},
        byCountry:{term:'',country : []},
        byRegion:{region:'',country : []}

    }


    private getCountriespRequest(url : string):Observable<Country[]>{
        console.log("🚀 ~ file: contries.service.ts:33 ~ ContrySevices ~ getCountriespRequest ~ url:", url)
        return this.http.get<Country[]>(url)
        .pipe(
            catchError(() => of([])),
            delay(2000)
        );
    }

    constructor(private http: HttpClient) {
        this.leadFromLocalStorage();
     }

    searchCountryByAlphaCode(code: string): Observable<Country | null>{
        return this.http.get<Country[]>(`${ this.apiUrl}/alpha/${code}`)
        .pipe(
            map(country => country.length >0 ? country[0]: null),
            catchError( () => of (null))
        );
    }
    
    searchCapital(term : string): Observable<Country[]>{
        const url= `${ this.apiUrl}/capital/${term}`;
        return this.getCountriespRequest(url)
        .pipe(
            tap(country => this.cacheStore.byCapital= {term , country} ),
            tap( () => this.saveToLocalStorage()),
        );

    }

    searchName(term : string): Observable<Country[]>{
        const url= `${ this.apiUrl}/name/${term}`;
        return this.getCountriespRequest(url).
        pipe(
            tap(country => this.cacheStore.byCountry= {term , country} ),

            tap( () => this.saveToLocalStorage()),
        );
    }

    searchRegion(region : Region): Observable<Country[]>{
        const url= `${ this.apiUrl}/region/${region}`;
        return this.getCountriespRequest(url).
        pipe(
            tap(country => {
                return this.cacheStore.byRegion= {region , country} 
            }),
            tap( () => this.saveToLocalStorage()),
        );
    }
}