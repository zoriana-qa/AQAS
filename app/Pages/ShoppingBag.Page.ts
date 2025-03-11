import {Page, Locator} from '@playwright/test';

export class ShoppingBagPage {
    readonly page: Page;
    readonly continueToCheckoutButton : Locator;
    readonly registerButton: Locator;
    
constructor(page: Page) {
    this.page = page;
    this.continueToCheckoutButton = page.locator('//button[@data-qa-id="shop-continue"]');
    this.registerButton = page.locator('[data-qa-id="logon-view-alternate-button"]');
}

    async goToCheckout(){
        await this.continueToCheckoutButton.click();
    }
    async tryToRegister() {
        await this.registerButton.click();
    }
};