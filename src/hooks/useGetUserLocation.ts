import { useEffect, useState } from 'react';

type UseGetUserLocationReturn = {
  city: string;
  locationError: string;
  isLoading: boolean;
};

export const useGetUserLocation = (defaultCity: string = 'Espoo'): UseGetUserLocationReturn => {
  const [city, setCity] = useState<string>('');
  const [locationError, setLocationError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
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
          setCity(location?.name || defaultCity);
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
