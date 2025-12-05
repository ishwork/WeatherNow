import { WeatherData } from '@/types';

type WeatherCardProps = {
  data: WeatherData;
};

const WeatherCard = ({ data }: WeatherCardProps) => {
  return (
    <div className="bg-gradient-to-br from-sky-300 to-blue-500 rounded-2xl shadow-2xl p-4 mobile:p-8 text-white">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold">
          {data.name}, {data.sys.country}
        </h2>
        <p className="text-xl mt-2 capitalize">{data.weather[0].description}</p>
      </div>

      <div className="flex items-center justify-center mb-6">
        <img
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
          alt={data.weather[0].description}
          className="w-32 h-32"
        />
        <div className="text-6xl font-bold">{Math.round(data.main.temp)}°C</div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
          <p className="text-sm opacity-80">Feels Like</p>
          <p className="text-2xl font-semibold">{Math.round(data.main.feels_like)}°C</p>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
          <p className="text-sm opacity-80">Humidity</p>
          <p className="text-2xl font-semibold">{data.main.humidity}%</p>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
          <p className="text-sm opacity-80">Wind Speed</p>
          <p className="text-2xl font-semibold">{data.wind.speed} m/s</p>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
          <p className="text-sm opacity-80">Pressure</p>
          <p className="text-2xl font-semibold">{data.main.pressure} hPa</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
