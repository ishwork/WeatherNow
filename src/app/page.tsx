import { Metadata } from 'next';

import { FAVICON_ICON, WEATHER_IMAGE } from '@/constants';

import HomePageWeather from '@/components/HomePageWeather';

export const metadata: Metadata = {
  title: 'WeatherNow',
  description: 'Search for weather information by city name',
  openGraph: {
    title: 'Weather information for City',
    description: 'Search for weather information by city name',
    type: 'website',
    locale: 'en_US',
    siteName: 'WeatherNow',
    images: [
      {
        url: WEATHER_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Weather information for City',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Weather information for City',
    description: 'Search for weather information by city name',
    images: [WEATHER_IMAGE],
  },
  icons: {
    icon: FAVICON_ICON,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const HomePage = () => <HomePageWeather />;

export default HomePage;
