import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ByDateComponent } from './by-date/by-date.component';
import { TemplateComponent } from './model/template/template.component';
import { TemplateImageGridComponent } from './model/template-image-grid/template-image-grid.component';
import { GalleryMonthComponent } from './gallery-month/gallery-month.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ByDateComponent,
    TemplateComponent,
    TemplateImageGridComponent,
    GalleryMonthComponent
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
