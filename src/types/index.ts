export type WeatherData = {
  name: string;
  sys: {
    country: string;
  };
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
    pressure: number;
  };
  weather: Array<{
    id: number;
    main: string;
    description: string;
    icon: string;
  }>;
  wind: {
    speed: number;
  };
  clouds: {
    all: number;
  };
};

export type FiveDayForecastResponse = {
  cod: string;
  message: number;
  cnt: number;
  list: Array<{
    dt: number;
    dt_txt: string;
    main: {
      temp: number;
    };
    weather: Array<{
      main: string;
      description: string;
      icon: string;
    }>;
  }>;
  city: {
    id: number;
    name: string;
    country: string;
  };
};

// Group forecast by day
export type ForecastItem = {
  dt: number;
  dt_txt: string;
  main: {
    temp: number;
  };
  weather: Array<{
    main: string;
    description: string;
    icon: string;
  }>;
};

export type DailyForecast = {
  [date: string]: ForecastItem[];
};
