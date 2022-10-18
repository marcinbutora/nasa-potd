import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ByDateComponent } from './by-date/by-date.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ByDateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  HttpClientModule,
  NgbModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
