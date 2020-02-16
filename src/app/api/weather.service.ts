import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { weather } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  
  endpoint = environment.apiEndpoint;
  apiKey = "552352cf2b574fa79258417020bb8b44";
  constructor(private http: HttpClient) { }

  getWeatherByCity(city: string): Observable<weather>{
     return this.http.get<weather>(this.endpoint + `q=${city}&appid=${this.apiKey}`);
  }
}
