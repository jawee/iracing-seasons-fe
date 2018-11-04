import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Season } from './Model/season';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SeasonDataService {
  private driversUrl = 'api/seasons';

  constructor(private http: HttpClient) { }

  getSeasons(): Observable<Season[]> {
    return this.http.get<Season[]>(this.driversUrl).pipe(catchError(this.handleError('getSeasons', [])))
  }

  getSeason(id: number): Observable<Season> {
    const url = this.driversUrl + '/' + id;
    return this.http.get<Season>(url).pipe(
      catchError(this.handleError<Season>('getSeason id=${id}'))
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
