export interface WeatherData {
   wind: {
    speed: number;
  };
  main: {
    temp: any;
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

}

