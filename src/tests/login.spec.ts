import { Browser, devices, expect, Page, test } from '@playwright/test';
import { allure } from 'allure-playwright';
import path from 'path';
import { chromium } from 'playwright';
import { LoginPage } from '../pages/login.page';

test('Login with registered customer credentials', async () => {
  await allure.epic('Authentication');
  await allure.feature('Login');
  await allure.story('Valid credentials');
  await allure.severity('critical');

  let browser: Browser;
  let page: Page;
  let loginPage: LoginPage;

  await allure.step('Launch browser', async () => {
    browser = await chromium.launch({ headless: true, channel: 'chromium' });
    page = await browser.newPage();
    loginPage = new LoginPage(page);
  });

  await allure.step('Navigate to login page', async () => {
    await loginPage.navigate();
  });

  await allure.step('Login as customer', async () => {
    await loginPage.loginValid('customer');
  });

  await allure.step('Verify page title', async () => {
    const title = await page.title();
    expect(title).toEqual('My Account');
  });

  await allure.step('Take screenshot', async () => {
    const screenshotPath = path.join(__dirname, '../../test-data/screenshots/login.png');
    await page.screenshot({ path: screenshotPath });
    await allure.attachment('Login screenshot', screenshotPath, 'image/png');
  });

  await allure.step('Close browser', async () => {
    await browser.close();
  });
});

test('Login with empty email on multiple mobile devices', async ({ browser }) => {
  await allure.epic('Authentication');
  await allure.feature('Login');
  await allure.story('Invalid credentials - empty email');
  await allure.severity('critical');

  const deviceList = ['iPhone 12', 'Pixel 5', 'iPad Pro 11'];

  for (const deviceName of deviceList) {
    let context;
    let page;
    let loginPage;

    await allure.step(`Testing on ${deviceName}`, async () => {
      const device = devices[deviceName];

      context = await browser.newContext({ ...device });
      page = await context.newPage();
      loginPage = new LoginPage(page);

      await loginPage.navigate();
      await loginPage.loginInvalid('testerEmptyEmail');
      await loginPage.verifyMessageError('EXCEEDED_ATTEMPTS');

      const screenshotPath = path.join(
        __dirname,
        `../../test-data/screenshots/login-${deviceName.replace(/\s/g, '-')}.png`
      );
      await page.screenshot({ path: screenshotPath });

      await context.close();
    });
  }
});
