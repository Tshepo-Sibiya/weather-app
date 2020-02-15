import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import {WeatherService} from '../api/weather.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
})
export class OverviewPage implements OnInit {

  city: string;
  _data: any;
  _hasError = false;
  showData = false;
  _message: string;
  cityObj = {
    city: '',
    country: '',
    timezone: '',

  }
  constructor(private fb: FormBuilder, private weathersvc: WeatherService) { }

  search() {
    this._hasError = false;
    this.weathersvc.getWeatherByCity(this.city).subscribe((response) => {
      
      this.cityObj = {
        city: response.name,
        timezone: response.timezone,
        country: response.sys.country
      }
      this.showData = true;
    }, (error) => {
      console.log(error.message);
      this._hasError = true;
      this._message = error.message;
    });
  }

  ngOnInit() {

  }

}
