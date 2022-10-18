import { Component, OnInit } from '@angular/core';
import {NasaApiService} from "../nasa-api.service";
import {NasaApi} from "../model/nasa-api";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dataFromNasa: NasaApi | undefined

  constructor(private service: NasaApiService) { }

  ngOnInit(): void {
    this.service.getDataFromNasaAPI().subscribe(data => {
      this.dataFromNasa = data;
    })
  }

}
