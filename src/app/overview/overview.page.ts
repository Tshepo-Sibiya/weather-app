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
  showData = false;
  cityObj = {
    city: '',
    timezone: '',

  }
  constructor(private fb: FormBuilder, private weathersvc: WeatherService) { }

  search() {
    
    this.weathersvc.getWeatherByCity(this.city).subscribe((response) => {
      this.cityObj = {
        city: response.name,
        timezone: response.sys.country,
      }
      this.showData = true;
    });
  }

  ngOnInit() {

  }

}
