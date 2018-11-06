import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RaceListComponent } from './race-list/race-list.component';
import { RaceComponent } from './race/race.component';
import { SeasonListComponent } from './season-list/season-list.component';
import { SeasonComponent } from './season/season.component';
import { CreateSeasonComponent } from './create-season/create-season.component';

const routes: Routes = [
  {path: '', redirectTo: '/seasonlist', pathMatch: 'full' },
  {path: 'seasonlist', component: SeasonListComponent },
  {path: 'racelist/:id', component: RaceListComponent},
  {path: 'race/:id', component: RaceComponent},
  {path: 'season/:id', component: SeasonComponent},
  {path: 'createseason', component: CreateSeasonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
