import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Race } from '../Model/race';
import { RaceDataService } from '../Service/race-data.service';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.less']
})
export class RaceComponent implements OnInit {
  race: Race;
  constructor(private route: ActivatedRoute, private raceDataService: RaceDataService, private location: Location) {

   }

  ngOnInit(): void {
    this.getRace();
  }
  
  getRace(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.raceDataService.getRace(id).subscribe(race => this.race = race);
  }

}


// this.race = new Race({
//   Id: 1,
//   Track: "Watkins",
//   SeasonId: 1,
//   RaceNumber: 1,
//   RaceType: 1,