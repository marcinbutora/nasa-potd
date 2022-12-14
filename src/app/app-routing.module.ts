import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ByDateComponent} from "./by-date/by-date.component";
import {HomeComponent} from "./home/home.component";
import {GalleryMonthComponent} from "./gallery-month/gallery-month.component";
import {SpinnerComponent} from "./model/spinner/spinner.component";

export const enum RouteLinks {
  byDate = 'date/:date',
  emptyLink = '',
  fromTo = 'from/:fromDate/to/:toDate',
  spinner = 'spinner'
}

const routes: Routes = [
  {path: RouteLinks.byDate, component: ByDateComponent},
  {path: RouteLinks.emptyLink, component: HomeComponent},
  {path: RouteLinks.fromTo, component: GalleryMonthComponent},
  {path: RouteLinks.spinner, component: SpinnerComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
