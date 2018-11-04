import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { RaceDataService }  from './Service/race-data.service';
import { RaceDataInMemoryServiceService } from './InMemoryService/race-data-in-memory-service.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RaceComponent } from './race/race.component';
import { RaceListComponent } from './race-list/race-list.component';
import { RaceRowComponent } from './race-row/race-row.component';
import { SeasonListComponent } from './season-list/season-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RaceComponent,
    RaceListComponent,
    RaceRowComponent,
    SeasonListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    HttpClientInMemoryWebApiModule.forRoot(
      RaceDataInMemoryServiceService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
