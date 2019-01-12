import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Season } from '../Model/season';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SeasonDataService {
  private seasonsUrl = 'api/seasons';
  // private seasonsUrl = 'https://localhost:5001/api/Seasons';

  constructor(private http: HttpClient) { }

  getSeasons(): Observable<Season[]> {
    return this.http.get<Season[]>(this.seasonsUrl).pipe(catchError(this.handleError('getSeasons', [])));
  }

  getSeason(id: number): Observable<Season> {
    const url = this.seasonsUrl + '/' + id;
    return this.http.get<Season>(url).pipe(
      catchError(this.handleError<Season>('getSeason id=${id}'))
    );
  }

  addSeason (season: Season): Observable<Season> {
    console.log('Adding season: ', season);
    return this.http.post<Season>(this.seasonsUrl, season, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((season: Season) => this.log(`added season w/ id=${season.id}`)),
      catchError(this.handleError<Season>('addSeason'))
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

  private log(message: string) {
    console.log(`HeroService: ${message}`);
  }
}
