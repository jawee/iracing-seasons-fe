import { Component, OnInit } from '@angular/core';
import { RaceDataService } from '../Service/race-data.service';
import { Race } from '../Model/race';

@Component({
  selector: 'app-race-list',
  templateUrl: './race-list.component.html',
  styleUrls: ['./race-list.component.less']
})
export class RaceListComponent implements OnInit {
  races: Race[];

  constructor(private raceService: RaceDataService) { }

  ngOnInit() {
    this.getRaces();
  }

  getRaces(): void {
    this.raceService.getRaces().subscribe(races => this.races = races);
  }
}
