import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CricketinfoComponent } from './component/cricketinfo/cricketinfo.component';
import { HttpClientModule } from '@angular/common/http';
import { PeoplesComponent } from './component/peoples/peoples.component';
import { RapidapiComponent } from './component/rapidapi/rapidapi.component';

@NgModule({
  declarations: [
    AppComponent,
    CricketinfoComponent,
    PeoplesComponent,
    RapidapiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
