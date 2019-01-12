import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { PointScoring } from '../Model/point-scoring';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class PointScoringDataService {
  private pointScoringUrl = 'api/pointscorings';
  constructor(private http: HttpClient) { }

  getPointsForSeason(id: number): Observable<PointScoring[]> {
    const input = { SeasonId: id};
    return this.http.post<PointScoring[]>(this.pointScoringUrl, input, httpOptions);
  }
}
