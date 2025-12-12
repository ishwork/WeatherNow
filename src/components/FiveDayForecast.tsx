import { useMemo } from 'react';

import { isValidDate } from '@/libs/utils';
import type { ForecastItem, DailyForecast } from '@/types';
import { useGetFiveDayForecastQuery } from '@/store/api/weatherApi';

const FiveDayForecast = ({ city }: { city: string }) => {
  const { data, error, isLoading } = useGetFiveDayForecastQuery(city);

  const dailyForecast = useMemo(() => {
    if (!data || !data.list) return {} as DailyForecast;
    return data.list.reduce((acc: DailyForecast, item: ForecastItem) => {
      const date = item.dt_txt.split(' ')[0];
      if (!acc[date]) acc[date] = [];
      acc[date].push(item);
      return acc;
    }, {} as DailyForecast);
  }, [data]);

  const days = useMemo(() => Object.keys(dailyForecast).slice(0, 5), [dailyForecast]);

  if (!city) return null;
  if (isLoading) return <div className="py-4 text-center">Loading 5-day forecast...</div>;
  if (error) return <div className="py-4 text-center text-red-500">Error loading forecast.</div>;
  if (!data || !data.list) return null;

  return (
    <div data-testid="five-day-forecast" className="mt-8">
      <h2 className="text-xl font-semibold mb-4">5-Day Forecast</h2>
      <div className="flex overflow-x-auto gap-4 mobile:grid mobile:grid-cols-5 mobile:overflow-x-visible">
        {days.map((date) => {
          const dayData = dailyForecast[date][0];
          const dayName = isValidDate(date)
            ? new Date(date).toLocaleDateString('en-US', { weekday: 'short' })
            : 'N/A';
          return (
            <div
              key={date}
              className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 flex flex-col items-center"
            >
              <div className="font-bold mb-1">{dayName}</div>
              <div className="text-xs text-gray-500 mb-2">
                {new Date(date).toLocaleDateString()}
              </div>
              <img
                src={`https://openweathermap.org/img/wn/${dayData.weather[0].icon}@2x.png`}
                alt={dayData.weather[0].description}
                className="w-12 h-12 mb-2"
              />
              <div className="text-lg">{Math.round(dayData.main.temp)}°C</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {dayData.weather[0].main}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FiveDayForecast;
