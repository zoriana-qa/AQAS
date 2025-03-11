import {Page, Locator} from '@playwright/test';
import {errorMessages} from '../../config/errorMessages'

export class SearchPage {
    readonly page: Page;
    readonly productList: Locator;

constructor(page: Page) {
    this.page = page;
    this.productList = page.locator('[data-qa-qualifier="media-image"]');
}
async chooseOneProduct() {
    await this.productList.first().waitFor();
    const productCount = await this.productList.count();
    if (productCount < 1) {
       throw new Error(errorMessages.notEnoughProducts)
    }
    else {
        await this.productList.first().click();
    }
};
};