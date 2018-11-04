import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SeasonDataService } from '../season-data.service';
import { Season } from '../Model/season';


@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.less']
})
export class SeasonComponent implements OnInit {
  season: Season;
  constructor(private route: ActivatedRoute, private seasonDataService: SeasonDataService, private location: Location) { }

  ngOnInit() {
    this.getSeason();
  }

  getSeason(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.seasonDataService.getSeason(id).subscribe(season => this.season = season);
  }

}
