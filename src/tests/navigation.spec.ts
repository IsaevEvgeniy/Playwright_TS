import { allure } from 'allure-playwright';
import { chromium } from 'playwright';
import { URLS } from '../constants/urls.constants';
import * as AccFactories from '../factories/account.factories';
import * as NavFactories from '../factories/navigation.factories';
import { test } from '../fixtures/user.fixtures';
import { AccountPage } from '../pages/account.page';
import { Navigation } from '../pages/navigation.page';

test('Authenticated user menu navigation', async ({ loggedInPage }) => {
  await allure.epic('Navigation');
  await allure.feature('Menu Navigation');
  await allure.story('Authenticated user');
  await allure.severity('normal');

  const page = await loggedInPage('customer');
  const storageState = await page.context().storageState();

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    recordVideo: {
      dir: './test-data/videos/',
      size: { width: 1280, height: 720 },
    },
    storageState: storageState,
  });
  const newPage = await context.newPage();

  await allure.step('Navigate to account page', async () => {
    await newPage.goto(URLS.ACCOUNT);
    await newPage.waitForLoadState('networkidle');
  });

  await allure.step('Test account menus', async () => {
    const accountPage = new AccountPage(newPage);
    await accountPage.leftMenu.clickItem(AccFactories.LeftMenuFactory.addressBook);
    await accountPage.rightMenu.clickItem(AccFactories.RightMenuFactory.downloads);
  });

  await allure.step('Test navigation menus', async () => {
    const navigation = new Navigation(newPage);
    await navigation.navbarMenu.clickCategory(NavFactories.CategoriesFactory.Cameras);
    await navigation.navbarMenu.clickDesktops(NavFactories.DesktopFactory.Mac);
    await navigation.navbarMenu.clickLaptopsNotebooks(NavFactories.LaptopFactory.Macs);
    await navigation.navbarMenu.clickСomponents(NavFactories.ComponentFactory.Monitors);
    await navigation.navbarMenu.clickMP3Players(NavFactories.MP3Factory.Test11);
    await navigation.leftMenu.clickCategory(NavFactories.LeftMenuFactory.Desktops);
  });

  await allure.step('Close browser', async () => {
    await context.close();
    await browser.close();
  });
});
