import {test} from '../fixtures/fixtures.ts';
import {testData} from '../testData/testData.ts';

test('ZARA 001 Failed checkout', async ({homePage, searchPage, productPage, checkoutPage, shoppingBagPage}) => {
    
    await test.step('Search for a product', async () => {
        await homePage.searchForProduct(testData.productName);
    });
    await test.step('Choose a product', async () => {
        await searchPage.chooseOneProduct();
    });
    await test.step('Select all available sizes of the product', async () => {
        await productPage.addAllSizesToCart();
    });
    await test.step('Go to the Shopping Cart', async () => {
        await productPage.goToShoppingCart();
    });
    await test.step('Go to the checkout page', async () => {
        await shoppingBagPage.goToCheckout();
    });
    await test.step('Try to register new user and proceed to checkout', async () => {
        await shoppingBagPage.tryToRegister();
    });
    await test.step('Fill the fields', async () => {
        await checkoutPage.makeCheckout();
    });
    await test.step('Verify error messages on the checkout page', async () => {
        await checkoutPage.verifyInfoMessages();
    });
});