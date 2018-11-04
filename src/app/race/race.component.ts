import { Component, OnInit } from '@angular/core';
import { Race } from '../Model/race';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.less']
})
export class RaceComponent implements OnInit {
  race: Race;
  constructor() {
    this.race = new Race({
      Id: 1,
      Track: "Watkins",
      SeasonId: 1,
      RaceNumber: 1,
      RaceType: 1,
    })
   }

  ngOnInit() {
  }

}
