import { Component, OnInit, Input } from '@angular/core';
import { RaceRow } from '../Model/race-row';
import { DriverDataService } from '../driver-data.service';
import { Driver } from '../Model/driver';

@Component({
  selector: '[app-race-row]',
  templateUrl: './race-row.component.html',
  styleUrls: ['./race-row.component.less']
})
export class RaceRowComponent implements OnInit {
  @Input() raceRow: RaceRow;

  driver: Driver;

  constructor(private driverService: DriverDataService) { }

  ngOnInit() {
    this.getDriver();
  }

  getDriver(): void {
    this.driverService.getDriver(this.raceRow.driverId).subscribe(driver => this.driver = driver);
  }

}
