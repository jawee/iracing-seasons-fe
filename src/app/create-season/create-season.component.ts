import { Component, OnInit } from '@angular/core';
import { Season } from '../Model/season';
import { SeasonDataService } from '../Service/season-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-season',
  templateUrl: './create-season.component.html',
  styleUrls: ['./create-season.component.less']
})
export class CreateSeasonComponent implements OnInit {
  season = new Season();
  message: String;

  onSubmit() {
    this.seasonDataService.addSeason(this.season).subscribe(
      season => this.season = season,
      error => console.error('Error' + error),
      () => this.router.navigate(['/season', this.season.id]));
    this.message = 'Season Created';
    console.log(this.season);
  }

  constructor(private seasonDataService: SeasonDataService, private router: Router) { }

  ngOnInit() {
  }

}
