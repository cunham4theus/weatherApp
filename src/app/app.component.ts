import { Component } from '@angular/core';
import { WeatherService } from './weather.service'; // import weather service

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'weatherApp';
  constructor(private weather: WeatherService) {
    this.weather
      .getFromUserSelection('london')
      .subscribe((data) => console.log(data));
  }
}
