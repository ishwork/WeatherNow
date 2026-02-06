import { ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';

type CityDropdownProps = {
  cities: string[];
  selectedCity: string;
  onCityChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  title?: string;
};

const CityDropdown = ({
  cities,
  selectedCity,
  onCityChange,
  title = 'See weather condition in popular cities in Finland',
}: CityDropdownProps) => {
  const router = useRouter();

  const handleQuickNavigate = () => {
    router.push(`/city/${encodeURIComponent(cities[0])}`);
  };

  return (
    <div className="flex flex-col items-center mb-6">
      <span className="mb-2 dark:text-blue-300 font-semibold">{title}</span>
      <div className="flex flex-row gap-3 w-full justify-center">
        <select
          value={selectedCity}
          onChange={onCityChange}
          className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200"
        >
          {cities.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <button
          type="button"
          className="px-4 py-2 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded hover:bg-blue-700 transition"
          onClick={handleQuickNavigate}
        >
          See for {cities[0]}
        </button>
      </div>
    </div>
  );
};

export default CityDropdown;
