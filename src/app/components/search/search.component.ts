import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {WeatherService} from '../../services/weather.service';
import { WeatherData } from '../../interfaces/weather-data';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule,
    CommonModule
  ],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchTerm: string='';
  weatherData!:WeatherData |undefined ;
  errorMessage:string ='';
  isLoading: boolean = false;

  localDate: string = '';
  localTime: string = '';

  constructor(private _weatherService: WeatherService) {}

  onSearch(){
    
    this.isLoading = true;
    this._weatherService.getWeather(this.searchTerm).subscribe({
      next: (data) => {
        console.log('Weather Data:', data);
        this.weatherData=data;
        this.errorMessage='';
        this.isLoading = false;
        this.changeBackground();
        if (this.weatherData?.timezone !== undefined) {
          const utcNow = new Date().getTime() + new Date().getTimezoneOffset() * 60000;
          const localTime = new Date(utcNow + this.weatherData.timezone * 1000);

          this.localTime = localTime.toLocaleTimeString();
          this.localDate = localTime.toLocaleDateString(undefined, {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });

          // console.log('localTime:', this.localTime);
          // console.log('localDate:', this.localDate);
        }
        },


      error: (err) => {
        if (err.status === 404) {
        this.weatherData = undefined;
          this.errorMessage='City not found';
          this.isLoading = false;
          document.body.style.background='linear-gradient(to bottom, #3f87a6, #ebf8e1)';
         // console.log('City not found');
        } else {
          //console.error('Error fetching weather:', err);
          this.errorMessage = 'Something went wrong. Please try again.';
          this.isLoading = false;
        }
      }
    });


}

changeBackground() {
  let bgUrl = '';

  switch (this.weatherData?.weather[0].main) {
    case 'Clouds':
      bgUrl = '/assets/images/Clouds.jpg';
      break;
    case 'Rain':
      bgUrl = '/assets/images/Rain.jpeg';
      break;
    case 'Clear':
      bgUrl = '/assets/images/Clear.jpg';
      break;
    case 'Snow':
      bgUrl = '/assets/images/Snow.jpg';
      break;
    case 'Thunderstorm':
      bgUrl = '/assets/images/Thunderstorm.jpeg';
      break;
    case 'Fog':
    case 'Mist':
      bgUrl = '/assets/images/Fog.webp';
      break;
    default:
      bgUrl = '/assets/images/all.jpg';
      break;
  }

  document.body.style.backgroundImage = `url('${bgUrl}')`;
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundPosition = 'center';
}


}
