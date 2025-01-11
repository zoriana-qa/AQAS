import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
});

test('buyCappuccino', async ({ page }) => {
  await page.locator('[data-test="Espresso_Macchiato"]').click();
  await page.locator('[data-test="Cappuccino"]').click();
  await page.locator('[data-test="checkout"]').click();
  await page.getByLabel('Name').fill('Zoriana');
  await page.getByLabel('Name').press('Tab');
  await page.getByLabel('Email').fill('zori@com.com');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Thanks for your purchase.' }).click();
});

test ('buyCappuccino2', async ({ page }) => { 
  await page.locator ('[data-test = "Cappuccino"]').click();
  await page.locator ('[data-test = "checkout"]').click();
  await page.locator ('input[ id = "name"]').fill("Zoriana");
  await page.locator ('input[ type = "email"]').fill("oriana@sdf.sdf");
  await page.locator ('button[ id= "submit-payment"]').click();
  await expect(page.locator ('[ class = "snackbar success"]')).toContainText('Thanks for your purchase. Please check your email for payment.');
})


test('skipFourth', async ({ page }) => {
  await page.locator('[data-test="Espresso"]').click();
  await page.locator('[data-test="Espresso_Macchiato"]').click();
  await page.locator('[data-test="Cappuccino"]').click();
  await page.getByRole('button', { name: 'Nah, I\'ll skip.' }).click();
  await expect(page.getByLabel('Cart page')).toContainText('cart (3)');
});

test ('skipFourth2', async ({page}) => {
await page.locator ('[data-test = "Flat_White"]').click ();
await page.locator ('[data-test = "Americano"]').click ();
await page.locator ('[data-test = "Espresso_Con Panna"]').click ();
await page.getByRole ('button', {name: "Nah, I'll skip."} ). click ();
await expect(page.locator ('[ aria-label = "Cart page"]')).toContainText ('cart (3)')
})


test('getFourthForFree', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.locator('[data-test="Espresso"]').click();
  await page.locator('[data-test="Espresso_Macchiato"]').click();
  await page.locator('[data-test="Cappuccino"]').click();
  await page.getByRole('button', { name: 'Yes, of course!' }).click();
  await page.locator('[data-test="checkout"]').click();
  await page.getByLabel('Name').fill('qwrqwr');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('qwr@sdg.sdg');
  await page.getByLabel('Promotion checkbox').check();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Thanks for your purchase.' }).click();
});

test('getFourthForFree2', async ({ page }) => {
await page.locator ('[data-test = "Flat_White"]').click ();
await page.locator ('[data-test = "Americano"]').click ();
await page.locator ('[data-test = "Espresso_Con Panna"]').click ();
await page.getByRole ('button', {name: "Yes, of course"} ).click()
await expect (page.locator('[aria-label="Cart page"]')).toContainText('cart (4)')
});


test('checkSum', async ({ page }) => {
  await page.locator('[data-test="Espresso"]').click();
  await page.locator('[data-test="Espresso"]').click();
  await page.locator('[data-test="Espresso"]').click();
  await page.locator('[data-test="checkout"]').click();
  await page.getByRole('button', { name: '×' }).click();
  await expect(page.locator('[data-test="checkout"]')).toContainText('Total: $30.00');
});

test('checkSum2', async ({ page }) => {
  await page.locator('[data-test = "Cafe_Breve"]').click();
  await page.locator('[data-test = "Cafe_Latte"]').click();
  await page.locator('[data-test = "Flat_White"]').click();
  await expect (page.locator ('[data-test= "checkout"]')).toContainText('Total: $49.00');
  })