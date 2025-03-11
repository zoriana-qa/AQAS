import { test as base, expect } from '@playwright/test';
import { HomePage } from '../app/Pages/Home.Page';
import { SearchPage } from '../app/Pages/Search.Page';
import { ProductPage} from '../app/Pages/Product.Page'
import { CheckoutPage } from '../app/Pages/Checkout.Page';
import { ShoppingBagPage } from '../app/Pages/ShoppingBag.Page';  

const storageStatePath = "tests/.state/state.json";

type Fixture = {
  homePage: HomePage, 
  searchPage: SearchPage,
  productPage: ProductPage, 
  checkoutPage: CheckoutPage,
  shoppingBagPage: ShoppingBagPage
};

export const test = base.extend<Fixture>({
  context: async ({ browser }, use) => {
    const context = await browser.newContext({ storageState: storageStatePath });
    await use(context);
    await context.close();
  },
    
    page: async({page}, use) =>{
      const homePage = new HomePage(page);
      homePage.navigateToHomePage();
      await use(page);
  },
    homePage: async ({ page }, use) => {
      const homePage = new HomePage(page);
      await use(homePage);
    },
    searchPage: async ({ page }, use) => {
      const searchPage = new SearchPage(page);
      await use(searchPage);
    },
    productPage: async ({ page }, use) => {
      const productPage = new ProductPage(page);
      await use(productPage);
    },
    shoppingBagPage: async ({ page }, use) => {
      const shoppingBagPage = new ShoppingBagPage(page);
      await use(shoppingBagPage);
    },
    checkoutPage: async ({ page }, use) => {
      const checkoutPage = new CheckoutPage(page);
      await use(checkoutPage);
    },
  })
  
  export { expect };
