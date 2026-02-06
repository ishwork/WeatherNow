'use client';

import React, { useState, useCallback, ChangeEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';

import { useGetWeatherByCityQuery } from '@/store/api/weatherApi';
import { useGetUserLocation } from '@/hooks/useGetUserLocation';
import { CITIES_OPTIONS } from '@/constants';

import ComponentLoadingFallback from '@/components/ComponentLoadingFallback';
import FiveDayForecast from '@/components/FiveDayForecast';
import LoadingSpinner from '@/components/LoadingSpinner';
import WeatherCard from '@/components/WeatherCard';

// Lazy-load components to laod only when needed, improving initial load performance
const CityNotFound = dynamic(() => import('@/components/CityNotFound'), {
  loading: () => <ComponentLoadingFallback />,
});

const FeaturesSection = dynamic(() => import('@/components/FeaturesSection'), {
  loading: () => <ComponentLoadingFallback />,
});

const CityDropdown = dynamic(() => import('@/components/CityDropdown'), {
  loading: () => <ComponentLoadingFallback />,
});

const HomePageWeather = () => {
  const { city, locationError, isLoading: isLoadingLocation } = useGetUserLocation('Espoo');
  const { data, error, isLoading } = useGetWeatherByCityQuery(city, {
    skip: !city,
  });

  // Dropdown for navigation only
  const [dropdownCity, setDropdownCity] = useState(city);
  const router = useRouter();

  const handleDropdownChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const newCity = e.target.value;
      setDropdownCity(newCity);
      router.push(`/city/${encodeURIComponent(newCity)}`);
    },
    [router],
  );

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
    <div className="min-h-screen p-4 mobile:p-8 max-w-4xl mx-auto">
      {/* Welcome Section */}
      <h1 className="text-center mb-8 text-gray-600 dark:text-gray-400">
        {locationError ? 'Showing weather for default city' : 'Weather in your city'}
      </h1>

      {/* Weather Card */}
      <WeatherCard data={data} />

      {/* Five-Day Forecast Section */}
      <FiveDayForecast city={city} />

      {/* Features Section */}
      <FeaturesSection className="mt-8 mb-8" />

      {/* Dropdown to select popular cities in Finland and navigate to their weather pages */}
      <CityDropdown
        cities={CITIES_OPTIONS}
        selectedCity={dropdownCity}
        onCityChange={handleDropdownChange}
      />

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
