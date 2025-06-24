import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {WeatherService} from '../../services/weather.service';
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  searchTerm: string='';

  constructor(private _weatherService: WeatherService) {}
  // onSearch(){
  //   this._weatherService.getWeather(this.searchTerm).subscribe({
  //     next: (data)=>{
  //     if(data.status === 200){
  //     console.log('Weather Data:', data);
  //     }else{
  //       console.log('city not found:');
  //     }
  //   },
  //     error: (err)=>{
  //       console.error('Error fetching weather:', err);
  //     }
  //   });
  // }

  onSearch(){
  this._weatherService.getWeather(this.searchTerm).subscribe({
    next: (data) => {
      console.log('Weather Data:', data);
    },
    error: (err) => {
      if (err.status === 404) {
        console.log('City not found');
      } else {
        console.error('Error fetching weather:', err);
      }
    }
  });
}

}
