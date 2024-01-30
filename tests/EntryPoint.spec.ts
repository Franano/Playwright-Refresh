import { test, expect } from '@playwright/test';

test.beforeEach('Search', async ({ page }) => {
  await page.goto('https://liverpool.com.mx/tienda/home');
  await page.getByPlaceholder("Buscar por producto, marca y más...").fill('playstation');
  await page.click('button.input-group-text');
  
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
