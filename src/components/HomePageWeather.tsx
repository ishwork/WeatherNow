'use client';

import Link from 'next/link';

import { useGetWeatherByCityQuery } from '@/store/api/weatherApi';
import { useGetUserLocation } from '@/hooks/useGetUserLocation';

import CityNotFound from './CityNotFound';
import FeaturesSection from './FeaturesSection';
import LoadingSpinner from './LoadingSpinner';
import WeatherCard from './WeatherCard';

const HomePageWeather = () => {
  const { city, locationError, isLoading: isLoadingLocation } = useGetUserLocation('Espoo');
  const { data, error, isLoading } = useGetWeatherByCityQuery(city, {
    skip: !city,
  });

  if (isLoading || isLoadingLocation) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner message="Fetching your location and weather data..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen p-8 max-w-2xl mx-auto">
        <CityNotFound cityName={city} />
      </div>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <div className="min-h-screen p-8 max-w-4xl mx-auto">
      {/* Welcome Section */}
      <h1 className="text-center mb-8 text-gray-600 dark:text-gray-400">
        {locationError ? 'Showing weather for default city' : 'Weather in your city'}
      </h1>

      {/* Weather Card */}
      <WeatherCard data={data} />

      {/* Features Section */}
      <FeaturesSection className="mt-8 mb-8" />

      <div className="text-center">
        <Link
          href="/search"
          className="inline-block px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105"
        >
          Search Other Cities
        </Link>
      </div>
    </div>
  );
};

export default HomePageWeather;
