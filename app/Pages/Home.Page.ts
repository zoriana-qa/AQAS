import test, {Page, Locator} from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly goNext :Locator;
    readonly linkToGo: Locator;
    readonly searchTextbox : Locator;

    constructor(page: Page) {
        this.page = page;
        this.goNext =page.getByRole('button', { name: 'Go' });
        this.linkToGo = page.locator('//*[@data-qa-id="header-search-text-link"]');
        this.searchTextbox = page.locator('#search-home-form-combo-input');
    }

    async searchForProduct(productName: string) {
        await this.goNext.click();
        await this.linkToGo.click();
        await this.searchTextbox.pressSequentially(productName, {delay: 500});
        await this.searchTextbox.press('Enter');
    };
    async navigateToHomePage(){
        await this.page.goto('http://zara.com/');
    }
};
