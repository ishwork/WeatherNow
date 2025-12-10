import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { WeatherData } from '@/types';

// Get API key from environment variable
const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

// console.log('Weather API Key:', API_KEY);

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.openweathermap.org/data/2.5/' }),
  keepUnusedDataFor: 120, // Keep cache for 2 minutes (120 seconds)
  endpoints: (builder) => ({
    getWeatherByCity: builder.query<WeatherData, string>({
      query: (city) => `weather?q=${city}&appid=${API_KEY}&units=metric`,
    }),
  }),
});

export const { useGetWeatherByCityQuery } = weatherApi;
