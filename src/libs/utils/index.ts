/**
 * Capitalizes the first letter of a given string.
 * @param str - The string to capitalize.
 * @returns The capitalized string.
 */
export const capitalizeFirstLetter = (str: string): string => {
  if (!str) return '';
  return str?.split('')[0]?.toUpperCase() + str?.slice(1);
};

/**
 * Validates if the given city name contains only letters, spaces, or hyphens.
 * @param city - The city name to validate.
 * @returns true if valid city name, false otherwise
 */
export const isValidCityName = (city: string): boolean => {
  return /^[a-zA-Z\s-]+$/.test(city);
};

/**
 * Checks if a value is a valid date string or timestamp.
 * @param value - The date string or timestamp to check.
 * @returns true if valid date, false otherwise
 */
export function isValidDate(value: string | number | Date): boolean {
  const date = new Date(value);
  return !isNaN(date.getTime());
}
