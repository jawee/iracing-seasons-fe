import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { RaceDataInMemoryServiceService } from './InMemoryService/race-data-in-memory-service.service';

import { AppComponent } from './app.component';
import { RaceComponent } from './race/race.component';
import { RaceListComponent } from './race-list/race-list.component';
import { RaceRowComponent } from './race-row/race-row.component';
import { SeasonListComponent } from './season-list/season-list.component';
import { SeasonComponent } from './season/season.component';
import { CreateSeasonComponent } from './create-season/create-season.component';
import { RequestInterceptor } from './http-interceptors/RequestInterceptor';
import { SeasonResultsComponent } from './season-results/season-results.component';

@NgModule({
  declarations: [
    AppComponent,
    RaceComponent,
    RaceListComponent,
    RaceRowComponent,
    SeasonListComponent,
    SeasonComponent,
    CreateSeasonComponent,
    SeasonResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

    // HttpClientInMemoryWebApiModule.forRoot(
    //   RaceDataInMemoryServiceService, { dataEncapsulation: false }
    // )
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
