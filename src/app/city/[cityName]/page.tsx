import { Metadata } from 'next';

import { capitalizeFirstLetter } from '@/libs/utils';
import { WEATHER_IMAGE } from '@/constants';

import CityPageWeather from '@/components/CityPageWeather';

type CityPageProps = {
  params: Promise<{ cityName: string }>;
};

export const generateMetadata = async ({ params }: CityPageProps): Promise<Metadata> => {
  const { cityName } = await params;
  const city = capitalizeFirstLetter(decodeURIComponent(cityName));

  return {
    title: `Weather information for ${city}`,
    description: `View current weather information for ${city}`,
    openGraph: {
      title: `Weather information for ${city}`,
      description: `View current weather information for ${city}`,
      type: 'website',
      locale: 'en_US',
      siteName: 'WeatherNow',
      images: [
        {
          url: WEATHER_IMAGE,
          width: 1200,
          height: 630,
          alt: `Weather information for ${city}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `Weather information for ${city}`,
      description: `View current weather information for ${city}`,
      images: [WEATHER_IMAGE],
    },
    icons: {
      icon: '/favicon/weather.ico',
    },
    robots: {
      index: true,
      follow: true,
    },
  };
};

/**
 * Async server component for dynamic city weather route.
 * @param {CityPageProps} params - Promise resolving to route params with cityName
 * @returns JSX element rendering CityPageWeather for the selected city
 */

const CityPage = async ({ params }: CityPageProps) => {
  const { cityName } = await params;
  const city = decodeURIComponent(cityName);
  return <CityPageWeather city={city} />;
};

export default CityPage;
