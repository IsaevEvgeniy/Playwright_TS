import { Browser, BrowserContext, expect, Page, test } from '@playwright/test';
import { allure } from 'allure-playwright';
import { chromium } from 'playwright';
import { URLS } from '../constants/urls.constants';
import { LoginPage } from '../pages/login.page';

test('Parallel authentication in isolated contexts', async () => {
  await allure.epic('Authentication');
  await allure.feature('Parallel login');
  await allure.story('Multiple contexts');
  await allure.severity('critical');

  let browser: Browser;
  let contexts: BrowserContext[];
  let pages: Page[];
  let loginPages: LoginPage[];

  await allure.step('Launch browser', async () => {
    browser = await chromium.launch({ headless: true });
  });

  await allure.step('Create two isolated browser contexts', async () => {
    contexts = await Promise.all([browser.newContext(), browser.newContext()]);
  });

  await allure.step('Create pages for each context', async () => {
    pages = await Promise.all(contexts.map((c) => c.newPage()));
    loginPages = pages.map((p) => new LoginPage(p));
  });

  await allure.step('Navigate to login page in both contexts', async () => {
    await Promise.all(loginPages.map((lp) => lp.navigate()));
  });

  await allure.step('Login in parallel', async () => {
    await allure.step('Context 1: Login as tester', async () => {
      await loginPages[0].loginValid('tester');
    });

    await allure.step('Context 2: Login as customer', async () => {
      await loginPages[1].loginValid('customer');
    });
  });

  await allure.step('Verify both users are logged in', async () => {
    const urls = await Promise.all(pages.map((p) => p.url()));

    urls.forEach((url, index) => {
      expect(url).toContain(URLS.ACCOUNT);
      console.log(`Context ${index + 1} URL:`, url);
    });
  });

  await allure.step('Close all contexts and browser', async () => {
    await Promise.all(contexts.map((c) => c.close()));
    await browser.close();
  });
});
