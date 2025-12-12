import { test, expect, Page } from '@playwright/test';

let page: Page;

test.beforeEach(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto('/search');
});

test.afterEach(async () => {
  await page.close();
});

test.describe('Search page', () => {
  test('should render the search input and button', async () => {
    const searchInput = page.getByTestId('city-input');
    const searchButton = page.getByTestId('search-button');

    await expect(searchInput).toBeVisible();
    await expect(searchButton).toBeVisible();
  });

  test('should load weather for city and 5-Day forecast', async () => {
    const searchInput = page.getByTestId('city-input');
    const searchButton = page.getByTestId('search-button');

    await searchInput.fill('Espoo');
    await searchButton.click();

    const weatherCard = page.getByTestId('weather-card');
    const cityName = page.getByRole('heading', { name: 'Espoo, FI' });
    const fiveDayForecast = page.getByTestId('five-day-forecast');

    await expect(weatherCard).toBeVisible();
    await expect(cityName).toBeVisible();
    await expect(fiveDayForecast).toBeVisible();
  });
});
