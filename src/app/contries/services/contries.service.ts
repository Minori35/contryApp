import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class ContrySevices {

    private apiUrl : string ='https://restcountries.com/v3.1'
    constructor(private http: HttpClient) { }
    
    searchCapital(term : string): Observable<Country[]>{
        return this.http.get<Country[]>(`${ this.apiUrl}/capital/${term}`)
        .pipe(
            catchError( error => {
                console.log(error);
                return of([])
                
            })
        );
    }

    searchName(term : string): Observable<Country[]>{
        return this.http.get<Country[]>(`${ this.apiUrl}/name/${term}`)
        .pipe(
            catchError( error => {
                console.log(error);
                return of([])
                
            })
        );
    }

    searchRegion(term : string): Observable<Country[]>{
        return this.http.get<Country[]>(`${ this.apiUrl}/region/${term}`)
        .pipe(
            catchError( error => {
                console.log(error);
                return of([])
                
            })
        );
    }
}