export interface WeatherData {
   wind: {
    speed: number;
  };
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    description: string;
    icon:string;
  }[];
  name: string;
  sys: {
    country: string;
  };
  timezone: number
}

