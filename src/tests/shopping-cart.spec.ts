import { expect } from '@playwright/test';
import { allure } from 'allure-playwright';
import path from 'path';
import { URLS } from '../constants/urls.constants';
import { test } from '../fixtures/auth.fixtures';
import { ProductPage } from '../pages/product.page';
import { Search } from '../pages/search.page';

test('User adds specific product to cart with custom quantity', async ({ newUserPage }) => {
  await allure.epic('Shopping Cart');
  await allure.feature('Add to Cart');
  await allure.story('Add product with custom quantity');
  await allure.severity('critical');

  const screenshotPath = path.join(__dirname, '../../test-data/screenshots/shopping-cart.png');
  const page = await newUserPage('moderator');
  let productPage: ProductPage;

  await allure.step('Search for iMac', async () => {
    const search = new Search(page);
    await search.fillField('iMac');
    await search.selectProduct('iMac');
  });

  await allure.step('Add to cart with quantity 15', async () => {
    productPage = new ProductPage(page);
    await productPage.addToCartWithQuantity('15');
    await productPage.verifySuccessMessage('iMac');
  });

  await allure.step('Verify cart', async () => {
    await productPage.goToCart();
    await expect(page).toHaveURL(URLS.CART);
  });

  await allure.step('Cart screenshot', async () => {
    await page.screenshot({ path: screenshotPath });
  });
});
