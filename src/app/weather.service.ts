import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  apiKeys: string = '741dcc6d4eed077e1dfc0d8c857fcc83';
  uri: string = '';
  constructor(private http: HttpClient) {}
  getFromUserSelection(city: string) {
    this.uri = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKeys}`;
    return this.http.get(this.uri);
  }
}
