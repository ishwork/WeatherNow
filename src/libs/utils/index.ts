export const capitalizeFirstLetter = (str: string): string => {
  if (!str) return '';
  return str?.split('')[0]?.toUpperCase() + str?.slice(1);
};

export const isValidCityName = (city: string): boolean => {
  return /^[a-zA-Z\s-]+$/.test(city);
};
