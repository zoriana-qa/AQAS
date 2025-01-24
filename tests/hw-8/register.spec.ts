import { test, expect } from '@playwright/test';
import { testData } from './test-data';

async function createArticle(page, testData) {
    const signInLink = page.locator('//a[contains(text(),"Sign in")]');
    const emailField = page.locator('//input[@placeholder="Email"]');
    const passwordField = page.locator('//input[@placeholder = "Password"]');
    const signInButton = page.locator('//button[contains(@class, "btn-lg")]');
    const newArticleLink = page.locator('//a[@href="/editor"]');
    const titleField = page.locator('//input[@data-qa-id="editor-title"]');
    const descriptionField = page.locator('//input[@data-qa-id="editor-description"]');
    const textField = page.locator('//textarea[contains(@placeholder,"Write your article")]');
    const tagsField = page.locator('//input[@data-qa-id="editor-tags"]');
    const publishButton = page.locator('//button[@data-qa-id="editor-publish"]');
    const textPublished = page.locator('//*[@data-qa-id="article-body"]/p');
    const titlePublished = page.locator('//h1[@data-qa-id="article-title"]');

    await page.goto(testData.baseURL);
    await signInLink.click();
    await emailField.fill(testData.login.email);
    await passwordField.fill(testData.login.password);
    await signInButton.click();

    // Check if login is successful
    await expect(newArticleLink).toBeVisible();
    await newArticleLink.click();
    await titleField.fill(testData.articleTitleField);
    await descriptionField.fill(testData.topicArticle);
    await textField.fill(testData.textArticle);
    await tagsField.fill(testData.enterTags);
    await publishButton.click();

    await expect(titlePublished).toContainText(testData.articleTitleField);
    await expect(textPublished).toContainText(testData.textArticle);
}

// Test case using the function
test('WEB - 001 Successfully created article', async ({ page }) => {
    await createArticle(page, testData);
});
