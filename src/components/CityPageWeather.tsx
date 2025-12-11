'use client';

import { useGetWeatherByCityQuery } from '@/store/api/weatherApi';

import FiveDayForecast from '@/components/FiveDayForecast';
import WeatherCard from '@/components/WeatherCard';

const CityPageWeather = ({ city }: { city: string }) => {
  const { data, error, isLoading } = useGetWeatherByCityQuery(city, {
    skip: !city,
  });

  if (isLoading) return <div className="py-8 text-center">Loading weather data...</div>;
  if (error)
    return <div className="py-8 text-center text-red-500">Error loading weather for {city}</div>;
  if (!data) return null;

  return (
    <div className="min-h-screen p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Weather in {city}</h1>
      <WeatherCard data={data} />
      <FiveDayForecast city={city} />
    </div>
  );
};

export default CityPageWeather;
