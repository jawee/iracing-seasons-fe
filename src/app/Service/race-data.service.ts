import { Injectable } from '@angular/core';
import { Race } from '../Model/race';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({providedIn: 'root'})

export class RaceDataService {

  private racesUrl = 'api/races';  // URL to web api

  constructor(private http: HttpClient) { }

  getRaces(): Observable<Race[]> {
    return this.http.get<Race[]>(this.racesUrl).pipe(catchError(this.handleError('getRaces', [])))
  }

  getRace(id: number): Observable<Race> {
    const url = this.racesUrl + '/' + id;
    return this.http.get<Race>(url).pipe(
      catchError(this.handleError<Race>('getRace id=${id}'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}