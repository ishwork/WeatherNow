const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://quickweathercheck.netlify.app';
const WEATHER_IMAGE = `${SITE_URL}/images/weather.png`;
const FAVICON_ICON = '/favicon/weather.ico';
const SEARCH_ICON = '/images/icons/search-icon.svg';
const MOON_ICON = '/images/icons/moon-icon.svg';
const SUN_ICON = '/images/icons/sun-icon.svg';
const SETTINGS_ICON = '/images/icons/settings-icon.svg';
const CLOSE_ICON = '/images/icons/close-icon.svg';
const TICK_ICON = '/images/icons/tick-icon.svg';

const CITIES_OPTIONS = [
  'Helsinki',
  'Espoo',
  'Tampere',
  'Vantaa',
  'Oulu',
  'Turku',
  'Jyväskylä',
  'Lahti',
  'Kuopio',
  'Pori',
];

export {
  WEATHER_IMAGE,
  FAVICON_ICON,
  SEARCH_ICON,
  MOON_ICON,
  SUN_ICON,
  SETTINGS_ICON,
  CLOSE_ICON,
  TICK_ICON,
  CITIES_OPTIONS,
};
