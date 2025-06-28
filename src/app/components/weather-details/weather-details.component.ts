import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { WeatherData } from '../../interfaces/weather-data';



@Component({
  selector: 'app-weather-details',
  standalone: true,
  imports: [FormsModule,
    CommonModule,

  ],  templateUrl: './weather-details.component.html',
  styleUrl: './weather-details.component.css'
})
export class WeatherDetailsComponent {
  @Input() weatherData!: WeatherData| undefined;
  @Input() searchTerm!: string;
  @Input() localDate!: string;
  @Input() localTime!: string;
  @Input() sunriseTime!: string;
  @Input() sunsetTime!: string;

}

