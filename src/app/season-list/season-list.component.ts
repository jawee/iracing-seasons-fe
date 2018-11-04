import { Component, OnInit } from '@angular/core';
import { SeasonDataService } from '../season-data.service';
import { Season } from '../Model/season';

@Component({
  selector: 'app-season-list',
  templateUrl: './season-list.component.html',
  styleUrls: ['./season-list.component.less']
})
export class SeasonListComponent implements OnInit {
  seasons: Season[];

  constructor(private seasonService: SeasonDataService) { }

  ngOnInit() {
    this.getRaces();
  }

  getRaces(): void {
    this.seasonService.getSeasons().subscribe(seasons => this.seasons = seasons);
  }
}
