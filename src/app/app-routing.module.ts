import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RaceListComponent } from './race-list/race-list.component';
import { RaceComponent } from './race/race.component';

const routes: Routes = [
  {path: '', redirectTo: '/racelist', pathMatch: 'full' },
  {path: 'racelist', component: RaceListComponent},
  {path: 'race/:id', component: RaceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
