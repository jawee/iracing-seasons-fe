import { Component, OnInit, Input } from '@angular/core';
import { RaceRow } from '../Model/race-row';

@Component({
  selector: '[app-race-row]',
  templateUrl: './race-row.component.html',
  styleUrls: ['./race-row.component.less']
})
export class RaceRowComponent implements OnInit {
  @Input() raceRow: RaceRow;
  constructor() { }

  ngOnInit() {
  }

}
