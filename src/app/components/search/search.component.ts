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

  constructor(private _weatherService: WeatherService) {}

  onSearch(){
    this.isLoading = true;

    this._weatherService.getWeather(this.searchTerm).subscribe({
      next: (data) => {
        console.log('Weather Data:', data);
        this.weatherData=data;
        this.errorMessage='';
        this.isLoading = false;
      },
      error: (err) => {
        if (err.status === 404) {
        this.weatherData = undefined;
          this.errorMessage='City not found';
          this.isLoading = false;
          console.log('City not found');
        } else {
          console.error('Error fetching weather:', err);
          this.errorMessage = 'Something went wrong. Please try again.';
          this.isLoading = false;
        }
      }
    });

}
clearError() {
  this.errorMessage = '';
}

}
