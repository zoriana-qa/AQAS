import { Page, Locator, expect } from '@playwright/test';
import { registrationData } from '../../config/registrationData'; 
import { errorMessages } from '../../config/errorMessages';

export class CheckoutPage {
    readonly page: Page;
    readonly emailField: Locator;
    readonly passwordField: Locator;
    readonly firstNameField: Locator;
    readonly lastNameField: Locator;
    readonly acceptCheckbox: Locator;
    readonly readAndUnderstandCheckbox: Locator;
    readonly createAccountButton: Locator;
    readonly emailErrorMessage: Locator;
    readonly passwordErrorMessage: Locator;
    readonly firstNameErrorMessage: Locator;
    readonly lastNameErrorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailField = page.locator('[data-qa-input-qualifier="email"]');
        this.passwordField = page.locator('[data-qa-input-qualifier="password"]');
        this.firstNameField = page.locator('[data-qa-input-qualifier="firstName"]');
        this.lastNameField = page.locator('[data-qa-input-qualifier="lastName"]');
        this.acceptCheckbox = page.locator('label').filter({ hasText: 'I want to receive' })
        this.readAndUnderstandCheckbox = page.locator('label').filter({ hasText: 'I have read and understand' });
        this.createAccountButton = page.locator('[data-qa-action="sign-up-submit"]');
        this.emailErrorMessage = this.getErrorMessageLocator('Enter a valid e-mail address.');
        this.passwordErrorMessage = this.getErrorMessageLocator('Enter a secure password: At least 8 characters long, containing uppercase and lowercase letters and numbers.');
        this.firstNameErrorMessage = this.getErrorMessageLocator('Required field.');
        this.lastNameErrorMessage = this.getErrorMessageLocator('Required field.');
    }

    getErrorMessageLocator(message: string): 
    Locator {
        return this.page.locator('.form-input-error', { hasText: message });
    } 
    async makeCheckout() {
        await this.emailField.fill(registrationData.email);
        await this.passwordField.fill(registrationData.password);
        await this.firstNameField.fill(registrationData.firstName);
        await this.lastNameField.fill(registrationData.lastName);
        await this.readAndUnderstandCheckbox.check();
        await this.createAccountButton.click();
    }
    async verifyInfoMessages() {
        await expect(this.createAccountButton).toBeVisible();
        await expect(this.emailErrorMessage).toContainText(errorMessages.invalidEmail);
        await expect(this.passwordErrorMessage).toContainText(errorMessages.notSecurePassword);
        await expect(this.lastNameErrorMessage).toContainText(errorMessages.requiredField);
    }
};
