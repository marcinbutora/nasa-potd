import { Component, OnInit } from '@angular/core';
import {NasaApi} from "../model/nasa-api";
import {NasaApiService} from "../nasa-api.service";
import {ActivatedRoute} from "@angular/router";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-by-date',
  templateUrl: './by-date.component.html',
  styleUrls: ['./by-date.component.css']
})
export class ByDateComponent implements OnInit {

  dataFromNasaByDate: NasaApi[] = []
  givenDate!: string

  constructor(private service: NasaApiService, private route: ActivatedRoute, private title: Title) { }

  ngOnInit(): void {
    this.givenDate = this.route.snapshot.params['date'];
    this.service.getDataFromNasaByDate(this.givenDate).subscribe(data => {
      this.dataFromNasaByDate = data;
      this.title.setTitle(`NASA - (${this.givenDate}) Picture Of The Day`)
    })
  }

}
