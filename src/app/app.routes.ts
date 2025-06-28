import { Routes } from '@angular/router';


import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [

    { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'weather', component: SearchComponent },
  // { path: 'weather/:city', component: WeatherDetailsComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: '**', component: NotFoundComponent },
];
