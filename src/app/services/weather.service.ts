import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherData } from '../interfaces/weather-data';
// interface WeatherData {
//   wind: {
//     speed: number;
//   };
//   main: {
//     temp: number;
//     humidity: number;
//   };
//   weather: {
//     description: string;
//   }[];
//   name: string;
//   sys: {
//     country: string;
//   };
// }

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey = 'cd4fc644ed513cb3b59d8d3cbbd12075';
  apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) { }

  getWeather(city: string):Observable<WeatherData> {
    return this.http.get<WeatherData>(`${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric`);
  }
}
