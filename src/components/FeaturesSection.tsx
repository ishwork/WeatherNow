import cn, { ClassValue } from '@/libs/styles/utils';

type FeaturesSectionProps = {
  className?: ClassValue;
};

const FeaturesSection = ({ className = '' }: FeaturesSectionProps) => {
  return (
    <div className={cn('grid md:grid-cols-3 gap-6', className)}>
      <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center">
        <div className="text-4xl mb-4">🌍</div>
        <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
          Global Coverage
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          Search weather data for cities worldwide with accurate real-time information
        </p>
      </div>

      <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center">
        <div className="text-4xl mb-4">📊</div>
        <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
          Detailed Metrics
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          View temperature, humidity, wind speed, pressure, and weather conditions
        </p>
      </div>

      <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center">
        <div className="text-4xl mb-4">🌓</div>
        <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Theme</h3>
        <p className="text-gray-600 dark:text-gray-400">
          Switch between light and dark themes for comfortable viewing anytime
        </p>
      </div>
    </div>
  );
};

export default FeaturesSection;
