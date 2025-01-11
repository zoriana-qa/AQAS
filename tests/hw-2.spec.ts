import { test, expect } from '@playwright/test';

test('getCodeGenPage', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Codegen.' }).click();
  await expect(page.getByRole('heading', { name: 'Test generator' })).toBeVisible();
});

test('getPage', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    const page1Promise = page.waitForEvent('popup');
    await page.getByLabel('Star microsoft/playwright on').click();
    const page1 = await page1Promise;
    await expect(page1.getByRole('link', { name: 'microsoft' })).toBeVisible();
  })

test('checkCompanies', async ({ page }) => {
        await page.goto('https://playwright.dev/');
        await expect(page.getByRole('heading', { name: 'Chosen by companies and open' })).toBeVisible();
        await expect(page.getByRole('link', { name: 'Bing' })).toBeVisible();
        await expect(page.getByRole('link', { name: 'VS Code' })).toBeVisible();
        await expect(page.getByRole('link', { name: 'Outlook' })).toBeVisible();
        await expect(page.getByRole('link', { name: 'Disney+ Hotstar' })).toBeVisible();
        await expect(page.getByRole('link', { name: 'Material UI' })).toBeVisible();
        await expect(page.getByRole('link', { name: 'ING', exact: true })).toBeVisible();
        await expect(page.getByRole('link', { name: 'Adobe' })).toBeVisible();
        await expect(page.getByRole('link', { name: 'React Navigation' })).toBeVisible();
        await expect(page.getByRole('link', { name: 'Accessibility Insights' })).toBeVisible();
      });

test('checkLinks', async ({ page }) => {
      await page.goto('https://playwright.dev/');
      await page.getByRole('link', { name: 'Docs' }).click();
      await page.getByRole('button', { name: 'Playwright Test' }).click();
      await page.getByRole('button', { name: 'Playwright Test' }).click();
      await expect(page.getByRole('link', { name: 'Test configuration' })).toBeVisible();
      await page.getByRole('link', { name: 'Test configuration' }).click();
      await expect(page.getByRole('link', { name: 'Next Test use options »' })).toBeVisible();
      await page.getByRole('link', { name: 'Next Test use options »' }).click();
      await expect(page.getByRole('heading', { name: 'Test use options' })).toBeVisible();
    });

test('checkText', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page.getByRole('heading', { name: 'Playwright enables reliable' })).toBeVisible();
    await expect(page.locator('h1')).toContainText('Playwright enables reliable end-to-end testing for modern web apps.')
 });

 test('checkValue', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.getByLabel('Search (Command+K)').click();
    await page.getByPlaceholder('Search docs').click();
    await page.getByPlaceholder('Search docs').fill('test');
    await page.locator('input[placeholder="Search docs"]').fill('test'); 
    await expect(page.locator('input[placeholder="Search docs"]')).toHaveValue('test'); 
  });
