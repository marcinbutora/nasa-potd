import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ByDateComponent} from "./by-date/by-date.component";
import {HomeComponent} from "./home/home.component";
import {GalleryMonthComponent} from "./gallery-month/gallery-month.component";

const routes: Routes = [
  { path: "by-date/:date", component: ByDateComponent},
  { path: "", component: HomeComponent},
  { path: "fromDate/:fromDate/toDate/:toDate", component: GalleryMonthComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
