import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Driver } from '../Model/driver';

@Injectable({
  providedIn: 'root'
})
export class DriverDataService {
  private driversUrl = 'api/drivers';

  constructor(private http: HttpClient) { }

  getDrivers(): Observable<Driver[]> {
    return this.http.get<Driver[]>(this.driversUrl).pipe(catchError(this.handleError('getDrivers', [])))
  }

  getDriver(id: number): Observable<Driver> {
    const url = this.driversUrl + '/' + id;
    return this.http.get<Driver>(url).pipe(
      catchError(this.handleError<Driver>('getDriver id=${id}'))
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
