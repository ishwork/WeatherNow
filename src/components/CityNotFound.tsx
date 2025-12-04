const CityNotFound = ({ cityName }: { cityName: string }) => {
  return (
    <div className="text-center py-12">
      <div className="max-w-md mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">City Not Found</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
          Couldn&apos;t find weather data for &quot;{cityName}&quot;. Please check the spelling and
          try again.
        </p>
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
          <p className="text-sm text-yellow-800 dark:text-yellow-300">
            <span className="font-semibold">Tip:</span> Try searching for major cities or use the
            full city name.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CityNotFound;
