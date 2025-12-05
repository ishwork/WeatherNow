import { useEffect, useState } from 'react';

type UseGetUserLocationReturn = {
  city: string;
  locationError: string;
  isLoading: boolean;
};

const STORAGE_KEY = 'user_location_city';
const STORAGE_TIMESTAMP_KEY = 'user_location_timestamp';
const CACHE_DURATION = 10 * 60 * 1000; // 10 minutes in milliseconds

export const useGetUserLocation = (defaultCity: string = 'Espoo'): UseGetUserLocationReturn => {
  const [city, setCity] = useState<string>('');
  const [locationError, setLocationError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Check for cached city in localStorage
    const cachedCity = localStorage.getItem(STORAGE_KEY);
    const cachedTimestamp = localStorage.getItem(STORAGE_TIMESTAMP_KEY);
    const now = Date.now();

    // If cached city exists and is less than 10 minutes old, use it
    if (cachedCity && cachedTimestamp) {
      const timestamp = parseInt(cachedTimestamp, 10);
      if (now - timestamp < CACHE_DURATION) {
        setCity(cachedCity);
        setIsLoading(false);
        return;
      }
    }

    // Check if geolocation is supported
    if (!('geolocation' in window.navigator)) {
      setCity(defaultCity);
      setIsLoading(false);
      return;
    }

    // Get user's position
    window.navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const response = await fetch(
            `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`,
          );
          const [location] = await response.json();
          const fetchedCity = location?.name || defaultCity;
          setCity(fetchedCity);

          // Cache the city and timestamp
          localStorage.setItem(STORAGE_KEY, fetchedCity);
          localStorage.setItem(STORAGE_TIMESTAMP_KEY, now.toString());
        } catch {
          setLocationError('Unable to fetch location');
          setCity(defaultCity);
        } finally {
          setIsLoading(false);
        }
      },
      () => {
        setLocationError('Unable to get location');
        setCity(defaultCity);
        setIsLoading(false);
      },
    );
  }, [defaultCity]);

  return { city, locationError, isLoading };
};
