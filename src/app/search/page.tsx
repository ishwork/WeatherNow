import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { WEATHER_IMAGE } from '@/constants';
import { capitalizeFirstLetter, isValidCityName } from '@/libs/utils';

import SearchPageWeather from '@/components/SearchPageWeather';

type SearchParamsProps = {
  searchParams: Promise<{ city?: string }>;
};

export const generateMetadata = async ({ searchParams }: SearchParamsProps): Promise<Metadata> => {
  const { city } = await searchParams;

  if (!city) {
    return {
      title: 'Search Weather for City',
      description: 'Search for weather information by city name',
      openGraph: {
        title: 'Search Weather for City',
        description: 'Search for weather information by city name',
        type: 'website',
        locale: 'en_US',
        siteName: 'WeatherNow',
        images: [
          {
            url: WEATHER_IMAGE,
            width: 1200,
            height: 630,
            alt: 'Search for weather information',
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Search Weather for City',
        description: 'Search for weather information by city name',
        images: [WEATHER_IMAGE],
      },
      icons: {
        icon: 'weather.ico',
      },
      robots: {
        index: true,
        follow: true,
      },
    };
  }

  return {
    title: `Weather information for ${capitalizeFirstLetter(city)}`,
    description: `View current weather information for ${capitalizeFirstLetter(city)}`,
    openGraph: {
      title: `Weather information for ${capitalizeFirstLetter(city)}`,
      description: `View current weather information for ${capitalizeFirstLetter(city)}`,
      type: 'website',
      locale: 'en_US',
      siteName: 'WeatherNow',
      images: [
        {
          url: WEATHER_IMAGE,
          width: 1200,
          height: 630,
          alt: `Weather information for ${capitalizeFirstLetter(city)}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `Weather information for ${capitalizeFirstLetter(city)}`,
      description: `View current weather information for ${capitalizeFirstLetter(city)}`,
      images: [WEATHER_IMAGE],
    },
    icons: {
      icon: 'favicon/weather.ico',
    },
    robots: {
      index: true,
      follow: true,
    },
  };
};

/**
 * Async server component for search page.
 * @param {SearchParamsProps} params - Object containing searchParams Promise
 * @returns JSX element rendering SearchPageWeather for the initial city
 */

const SearchPage = async ({ searchParams }: SearchParamsProps) => {
  const { city } = await searchParams;

  // If city param is provided but invalid, show 404 page
  if (city && !isValidCityName(city)) notFound();

  return <SearchPageWeather initialCity={city} />;
};

export default SearchPage;
