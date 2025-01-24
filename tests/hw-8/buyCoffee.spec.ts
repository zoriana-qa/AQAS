import {expect, Page, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
});

async function buyEspressoAndCapuccino(page:Page, name: string, email: string) {
    await page.locator('[data-test="Espresso_Macchiato"]').click();
    await page.locator('[data-test="Cappuccino"]').click();
    await page.locator('[data-test="checkout"]').click();
    await page.getByLabel('Name').fill(name);
    await page.getByLabel('Email').fill(email);
    await page.getByRole('button', { name: 'Submit' }).click();
    await page.getByRole('button', { name: 'Thanks for your purchase.' }).click();
  }

  test('buyCoffee for Zoriana', async ({ page }) => {
    await buyEspressoAndCapuccino(page, 'Zoriana', 'zor@sdf.com');
  });

  test('buyCoffee for Alex', async ({ page }) => {
    await buyEspressoAndCapuccino(page, 'Alex', 'alex@example.com');
  });

 
async function skipFourth(page: Page) {
  await page.locator('[data-test="Flat_White"]').click();
  await page.locator('[data-test="Americano"]').click();
  await page.locator('[data-test="Espresso_Con Panna"]').click();
  await page.getByRole('button', { name: "Nah, I'll skip." }).click();
  await expect(page.locator('[aria-label="Cart page"]')).toContainText('cart (3)');
}

test('skipFourth', async ({ page }) => {
  await skipFourth(page);
});






