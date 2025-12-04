'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useGetWeatherByCityQuery } from '@/store/api/weatherApi';
import CityNotFound from './CityNotFound';
import LoadingSpinner from './LoadingSpinner';
import WeatherCard from './WeatherCard';

const SearchPageWeather = ({ initialCity }: { initialCity?: string }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [city, setCity] = useState(initialCity || '');
  const [searchCity, setSearchCity] = useState(initialCity || '');

  const { data, error, isLoading, isFetching } = useGetWeatherByCityQuery(searchCity, {
    skip: !searchCity,
  });

  // Update document title when weather data changes
  useEffect(() => {
    if (data) {
      document.title = `${data.name}, ${data.sys.country} - WeatherNow`;
    } else if (!searchCity) {
      document.title = 'WeatherNow';
    }
  }, [data, searchCity]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      setSearchCity(city.trim());
      // Update URL with search param
      router.push(`/search?city=${encodeURIComponent(city.trim())}`);
    } else {
      setSearchCity('');
      // Clear search param from URL
      router.push('/search');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCity(value);
    // Clear URL and search when input is emptied
    if (!value.trim()) {
      setSearchCity('');
      router.push('/search');
    }
  };

  // Sync with URL changes (browser back/forward)
  useEffect(() => {
    const cityParam = searchParams.get('city');
    if (cityParam) {
      setCity(cityParam);
      setSearchCity(cityParam);
    } else {
      setCity('');
      setSearchCity('');
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen p-8 max-w-2xl mx-auto">
      {/* Search Form */}
      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex gap-2">
          <input
            type="text"
            value={city}
            onChange={handleInputChange}
            placeholder="Enter city name..."
            className="flex-1 px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 text-gray-900 dark:text-white bg-white dark:bg-gray-800 placeholder:text-gray-500 dark:placeholder:text-gray-400"
          />
          <button
            type="submit"
            disabled={!city.trim() || isLoading}
            className="px-6 py-3 bg-blue-400 dark:bg-blue-600 text-white rounded-lg hover:bg-blue-600 dark:hover:bg-blue-700 disabled:bg-gray-400 dark:disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors"
          >
            Search
          </button>
        </div>
      </form>

      {/* Loading State */}
      {(isLoading || isFetching) && <LoadingSpinner message="Loading weather data..." />}

      {/* Error State - City Not Found */}
      {error && !isLoading && !isFetching && searchCity && <CityNotFound cityName={searchCity} />}

      {/* Weather Data */}
      {data && !isLoading && !isFetching && searchCity && !error && <WeatherCard data={data} />}

      {/* Initial State */}
      {!searchCity && !isLoading && !error && (
        <div className="text-center py-12 text-gray-500">
          <svg
            className="mx-auto h-24 w-24 text-gray-400 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
            />
          </svg>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Search for a city to see weather information
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchPageWeather;
