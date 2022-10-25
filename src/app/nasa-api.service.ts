import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {NasaApi} from "./model/nasa-api";
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class NasaApiService {
  private readonly API_KEY = 'EPb28HmsN0sXPyq2mj0nrwQFBj17dgjOXbCTgV8q';
  private readonly API_URL = `https://api.nasa.gov/planetary`;

  constructor(private http: HttpClient, private title: Title) { }

  getDataFromNasaAPI = (): Observable<NasaApi> => {
    return this.http.get<NasaApi>(`${this.API_URL}/apod?api_key=${this.API_KEY}`);
}

  getDataFromNasaByDate = (date: string): Observable<NasaApi> => {
    return this.http.get<NasaApi>(`${this.API_URL}/apod?api_key=${this.API_KEY}&date=${date}`)
  }

  getDataFromSpecificDate = (fromDate: string, toDate: string): Observable<NasaApi[]> => {
    return this.http.get<NasaApi[]>(`${this.API_URL}/apod?api_key=${this.API_KEY}&start_date=${fromDate}&end_date=${toDate}`)
  }

  setTitleForDate = (date: string) => {
    return this.title.setTitle(`NASA - (${date}) Picture Of The Day`)
  }
}
