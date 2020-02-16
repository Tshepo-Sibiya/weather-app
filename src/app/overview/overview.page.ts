import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import {WeatherService} from '../api/weather.service';
import { weather } from '../models/weather.model';
import { errorModel } from '../models/error.model';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
})
export class OverviewPage implements OnInit {

  city: string;
  _data: any;
  _loading = false;
  _hasError = false;
  showData = false;
  _message: string;
  weather: weather;
  _err: errorModel;

  constructor(private fb: FormBuilder, private weathersvc: WeatherService) { }

  reset() {
    this.weather = null;
    this._message = null;
    this.showData = null;
     this._hasError = false;
  }
  search() {
    this._loading = true;
    this._hasError = false;
    this.weathersvc.getWeatherByCity(this.city).subscribe((response) => {
      this._loading = false;
      this.weather = response;
      this.showData = true;
    }, (error) => {
      this.showData = false;
      this.weather = null;
      this._loading = false;
      this._err = error.error;
      this._hasError = true;
    });
  }

  ngOnInit() {

  }

}
