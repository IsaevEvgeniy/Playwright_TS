import { Browser, expect, Locator, Page, test } from '@playwright/test';
import { allure } from 'allure-playwright';
import { chromium } from 'playwright';
import { URLS } from '../constants/urls.constants';
import { UserFactory } from '../factories/user.factories';
import { IUserRegistration } from '../types/user.type';

test('CSS, XPath and ARIA locators comparison', async () => {
  await allure.epic('Locators');
  await allure.feature('CSS vs XPath vs ARIA');
  await allure.story('Compare different locator strategies');
  await allure.severity('normal');

  let browser: Browser;
  let page: Page;
  let data: IUserRegistration;

  await allure.step('Launch browser and open registration page', async () => {
    browser = await chromium.launch({ headless: true, channel: 'chromium' });
    page = await browser.newPage();
    await page.goto(URLS.REGISTER);
    data = UserFactory.registration.valid.tester;
  });

  await allure.step('CSS Locators - Fill form fields', async () => {
    await allure.step('Fill first name with CSS #id', async () => {
      const firstName: Locator = page.locator('#input-firstname');
      await firstName.pressSequentially(data.firstName, { delay: 1000 });
    });

    await allure.step('Fill last name with CSS #id', async () => {
      const lastName: Locator = page.locator('#input-lastname');
      await lastName.pressSequentially(data.lastName, { delay: 1000 });
    });

    await allure.step('Check logo with CSS class', async () => {
      const logo: Locator = page.locator('.img-responsive');
      const logoExist = await logo.isEnabled();
      console.log('Logo enabled:', logoExist);
    });

    await allure.step('Check header with CSS text', async () => {
      const header: Locator = page.locator('text=Register Account');
      const headerExist = await header.isEnabled();
      console.log('Header enabled:', headerExist);
    });

    await allure.step('Fill email with CSS element+id', async () => {
      const email: Locator = page.locator('css=input#input-email');
      await email.fill(data.email);
    });

    await allure.step('Fill phone with CSS attribute', async () => {
      const phone: Locator = page.locator('css=input[name="telephone"]');
      await phone.fill(data.phone);
    });

    await allure.step('Check privacy policy checkbox', async () => {
      const checkBox = page.locator('css=input[type="checkbox"]');
      await checkBox.check();
    });
  });

  await allure.step('XPath Locators - Fill password fields', async () => {
    await allure.step('Fill password with XPath', async () => {
      const password: Locator = page.locator('xpath=//*[@id="input-password"]');
      await password.fill(data.password);
    });

    await allure.step('Fill password confirm with XPath', async () => {
      const passwordConfirm: Locator = page.locator('xpath=//*[@id="input-confirm"]');
      await passwordConfirm.fill(data.passwordConfirm);
    });
  });

  await allure.step('ARIA Locators - Radio buttons', async () => {
    await allure.step('Check Yes radio button with ARIA role', async () => {
      const yesRadio = page.getByRole('radio', { name: 'Yes' });
      await expect(yesRadio).toBeVisible();
    });

    await allure.step('Check No radio button with ARIA role', async () => {
      const noRadio = page.getByRole('radio', { name: 'No' });
      await expect(noRadio).toBeVisible();
    });
  });

  await allure.step('Submit form with ARIA button', async () => {
    const button: Locator = page.getByRole('button', { name: 'Continue' });
    await button.click();
  });

  await allure.step('Close browser', async () => {
    await browser.close();
  });
});
