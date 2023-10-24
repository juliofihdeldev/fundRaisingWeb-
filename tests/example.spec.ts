import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  
  await page.goto('http://localhost:3000');

 // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/POTE KOLE/);

  await  page.getByRole('banner').getByRole('link', { name: 'POTE KOLE' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('banner', { name: 'POTE KOLE' })).toBeVisible();

});
