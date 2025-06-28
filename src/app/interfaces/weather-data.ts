export interface WeatherData {
   wind: {
    speed: number;
  };
  main: {
    temp: number;
    humidity: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
  };
  weather: {
    description: string;
    icon:string;
    main:string
  }[];
  name: string;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number
}


