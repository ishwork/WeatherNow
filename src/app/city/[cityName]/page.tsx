import CityPageWeather from '@/components/CityPageWeather';

type CityPageProps = {
  params: Promise<{ cityName: string }>;
};

/**
 * Async server component for dynamic city weather route.
 * @param {CityPageProps} params - Promise resolving to route params with cityName
 * @returns JSX element rendering CityPageWeather for the selected city
 */

const CityPage = async ({ params }: CityPageProps) => {
  const resolvedParams = await params;
  const cityName = resolvedParams?.cityName;
  const city = decodeURIComponent(cityName);
  return <CityPageWeather city={city} />;
};

export default CityPage;
