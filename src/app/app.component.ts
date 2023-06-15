import { Component } from '@angular/core';
import { WeatherService } from './weather.service'; // import weather service

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'weatherApp';
  constructor(private weather: WeatherService) {}
  weatherInfo: any = [];
  city: string = 'bogota';
  searchValue: string = '';
  getWeatherInfo(value: string) {
    this.city = value;
    this.weather
      .getFromUserSelection(value)
      .subscribe((data) => (this.weatherInfo = data));
  }
}
