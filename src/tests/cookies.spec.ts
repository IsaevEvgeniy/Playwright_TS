import { BrowserContext, expect, Page, test } from '@playwright/test';
import { allure } from 'allure-playwright';
import path from 'path';
import { firefox } from 'playwright';
import { URLS } from '../constants/urls.constants';

test('Сross-session cookie persistence', async () => {
  await allure.epic('Cookies');
  await allure.feature('Persistence');
  await allure.story('Cross-session cookie');
  await allure.severity('critical');

  const sessionPath = path.join(__dirname, '../../test-data/session');
  const expiryDate = Math.floor(Date.now() / 1000) + 30 * 24 * 60 * 60;

  let browser1: BrowserContext;
  let browser2: BrowserContext;

  await allure.step('First session - Create and set cookie', async () => {
    browser1 = await firefox.launchPersistentContext(sessionPath, {
      headless: false,
      viewport: { width: 1280, height: 720 },
    });

    const page1: Page = browser1.pages()[0];
    await page1.goto(URLS.REGISTER);

    await browser1.addCookies([
      {
        name: 'test_cookie',
        value: 'persistent_value',
        domain: '.naveenautomationlabs.com',
        path: '/',
        expires: expiryDate,
      },
    ]);

    const cookies1 = await browser1.cookies();
    const addedCookie = cookies1.find((c) => c.name === 'test_cookie');

    expect(addedCookie).toBeDefined();
    expect(addedCookie?.value).toBe('persistent_value');
  });

  await allure.step('Close first browser', async () => {
    await browser1.close();
  });

  await allure.step('Second session - Verify cookie persists', async () => {
    browser2 = await firefox.launchPersistentContext(sessionPath, {
      headless: false,
    });

    const page2: Page = browser2.pages()[0];
    await page2.goto(URLS.ACCOUNT);

    const cookies2 = await browser2.cookies();
    const persistedCookie = cookies2.find((c) => c.name === 'test_cookie');

    expect(persistedCookie).toBeDefined();
    expect(persistedCookie?.value).toBe('persistent_value');
  });

  await allure.step('Close second browser', async () => {
    await browser2.close();
  });
});
