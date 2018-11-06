import { Component, OnInit } from '@angular/core';
import { SeasonDataService } from '../Service/season-data.service';
import { Season } from '../Model/season';

@Component({
  selector: 'app-season-list',
  templateUrl: './season-list.component.html',
  styleUrls: ['./season-list.component.less']
})
export class SeasonListComponent implements OnInit {
  seasons: Season[];

  constructor(private seasonDataService: SeasonDataService) { }

  ngOnInit() {
    this.getSeasons();
  }

  getSeasons(): void {
    this.seasonDataService.getSeasons().subscribe(seasons => this.seasons = seasons);
  }
}
