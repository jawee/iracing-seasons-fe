import { PointScoringDataService } from './../Service/point-scoring-data.service';
import { PointScoring } from './../Model/point-scoring';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-season-results',
  templateUrl: './season-results.component.html',
  styleUrls: ['./season-results.component.less']
})
export class SeasonResultsComponent implements OnInit {
  pointScorings: PointScoring[];

  constructor(private route: ActivatedRoute, private pointScoringDataService: PointScoringDataService) { }

  ngOnInit() {
    this.getResults();
  }

  getResults(): void {
    const id = + this.route.snapshot.paramMap.get('id');
    // tslint:disable-next-line:max-line-length
    this.pointScoringDataService.getPointsForSeason(id).subscribe(pointScorings => this.pointScorings = pointScorings, error => console.error(error), () => console.log(this.pointScorings));
  }

}
