import {Component, Input, OnInit} from '@angular/core';
import {NasaApiService} from "../nasa-api.service";
import {NasaApi} from "../model/nasa-api";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-gallery-month',
  templateUrl: './gallery-month.component.html',
  styleUrls: ['./gallery-month.component.css']
})
export class GalleryMonthComponent implements OnInit {

  @Input() imageData: NasaApi[] = []
  @Input() fromDate: string = ""
  @Input() toDate: string = ""

  constructor(private service: NasaApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.fromDate = this.route.snapshot.params["fromDate"]
    this.toDate = this.route.snapshot.params["toDate"]
    this.service.getDataFromSpecificDate(this.fromDate, this.toDate).subscribe(data => {
      this.imageData = data;
    })
  }

}
