import { Page, Locator } from '@playwright/test';
import { errorMessages } from '../../config/errorMessages'

export class ProductPage {
    readonly page: Page;
    readonly sizeList: Locator;
    readonly closeCartButton: Locator;
    readonly addToCartButton: Locator;
    readonly shoppingCartButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.sizeList = page.locator('[data-qa-action="size-in-stock"]');
        this.closeCartButton = page.getByRole('button', { name: 'close' });
        this.addToCartButton = page.locator('[data-qa-action="add-to-cart"]');
        this.shoppingCartButton = page.locator('[data-qa-id="layout-header-go-to-cart"]')

    }
    async addAllSizesToCart() {
        await this.addToCartButton.click();
        await this.sizeList.first().waitFor();
        const arrayOfSizes = await this.sizeList.all();
        const sizeCount = arrayOfSizes.length;
        if (sizeCount > 1) {
            for (let size of arrayOfSizes) {
                await size.click();
                await this.closeCartButton.click();
                await this.addToCartButton.click();
            }
        }
        else throw new Error(errorMessages.notEnoughSizes);
    }
    
    async goToShoppingCart() {
        await this.shoppingCartButton.click();
    }
};