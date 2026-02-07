'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

import { SITE_URL } from '@/constants';
import { useGetWeatherByCityQuery } from '@/store/api/weatherApi';
import { useGetUserLocation } from '@/hooks/useGetUserLocation';
import SocialShareGrid from '@/components/SocialShareGrid';
import ShareButton from '@/components/ShareButton';

const SharePopover = () => {
  const [isShareOpen, setIsShareOpen] = useState(false);
  const shareRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { city, isLoading: isLoadingLocation } = useGetUserLocation('Espoo');

  const searchCity = searchParams.get('city')?.trim() || '';
  const routeCity = pathname.startsWith('/city/')
    ? decodeURIComponent(pathname.replace('/city/', ''))
    : '';
  const activeCity = (searchCity || routeCity || city || '').trim();

  const { data: weatherData, isLoading: isLoadingWeather } = useGetWeatherByCityQuery(activeCity, {
    skip: !activeCity,
  });

  const baseUrl = SITE_URL || (typeof window !== 'undefined' ? window.location.origin : '');
  const shareUrl = useMemo(
    () => (weatherData ? `${baseUrl}/city/${encodeURIComponent(weatherData.name)}` : ''),
    [weatherData, baseUrl],
  );
  const shareText = useMemo(
    () =>
      weatherData
        ? `Weather in ${weatherData.name}: ${Math.round(weatherData.main.temp)}°C, ${weatherData.weather[0].description}.`
        : '',
    [weatherData],
  );

  useEffect(() => {
    if (!isShareOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (!shareRef.current) return;
      if (!shareRef.current.contains(event.target as Node)) {
        setIsShareOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isShareOpen]);

  const handleCopyAndOpen = useCallback(
    async (url: string) => {
      if (!shareText || !shareUrl) return;
      try {
        if (navigator.clipboard) {
          await navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
        }
        window.open(url, '_blank', 'noopener,noreferrer');
      } catch (error) {
        console.warn('Share failed', error);
      }
    },
    [shareText, shareUrl],
  );

  return (
    <div className="relative" ref={shareRef}>
      <ShareButton
        isOpen={isShareOpen}
        disabled={isLoadingLocation || isLoadingWeather || !weatherData}
        onClick={() => setIsShareOpen((prev) => !prev)}
      />

      {isShareOpen && weatherData && shareUrl && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-2 z-50">
          <SocialShareGrid shareUrl={shareUrl} shareText={shareText} onShare={handleCopyAndOpen} />
        </div>
      )}
    </div>
  );
};

export default SharePopover;
