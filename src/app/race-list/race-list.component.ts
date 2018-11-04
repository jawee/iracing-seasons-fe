import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { RaceDataService } from '../Service/race-data.service';
import { Race } from '../Model/race';

@Component({
  selector: 'app-race-list',
  templateUrl: './race-list.component.html',
  styleUrls: ['./race-list.component.less']
})
export class RaceListComponent implements OnInit {
  races: Race[];

  constructor(private route: ActivatedRoute, private raceDataService: RaceDataService, private location: Location) { }

  ngOnInit() {
    this.getRaces();
  }

  getRaces(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.raceDataService.getRacesForSeason(id).subscribe(races => this.races = races);
  }
}
