import { Browser, expect, Page, test } from '@playwright/test';
import { allure } from 'allure-playwright';
import path from 'path';
import { chromium } from 'playwright';
import { URLS } from '../constants/urls.constants';
import { UserFactory } from '../factories/user.factories';
import { IUserRegistration } from '../types/user.type';

test('Registration form filling with various locators', async () => {
  await allure.epic('Registration');
  await allure.feature('User Registration');
  await allure.story('Complex locators');
  await allure.severity('normal');

  const screenshotPath = path.join(__dirname, '../../test-data/screenshots/register.png');

  await allure.step('Launch browser and open registration page', async () => {
    const browser: Browser = await chromium.launch({
      headless: true,
      channel: 'chrome',
    });

    const page: Page = await browser.newPage();
    await page.goto(URLS.REGISTER);

    const user: IUserRegistration = UserFactory.registration.valid.moderator;

    await allure.step('Fill registration form with complex locators', async () => {
      await allure.step('Fill first name (form >> #input-firstname)', async () => {
        const firstName = page.locator('form >> #input-firstname');
        await firstName.fill(user.firstName);
      });

      await allure.step('Fill last name (form.form-horizontal >> #input-lastname)', async () => {
        const lastName = page.locator('form.form-horizontal >> #input-lastname');
        await lastName.fill(user.lastName);
      });

      await allure.step('Fill email (fieldset#account >> #input-email)', async () => {
        const email = page.locator('fieldset#account >> #input-email');
        await email.fill(user.email);
      });

      await allure.step('Fill telephone (form >> #input-telephone)', async () => {
        const telephone = page.locator('form >> #input-telephone');
        await telephone.fill(user.phone);
      });

      await allure.step('Fill password (form >> #input-password)', async () => {
        const password = page.locator('form >> #input-password');
        await password.fill(user.password);
      });

      await allure.step('Fill password confirm (form >> #input-confirm)', async () => {
        const passwordConfirm = page.locator('form >> #input-confirm');
        await passwordConfirm.fill(user.passwordConfirm);
      });

      await allure.step('Accept privacy policy (form >> input[type="checkbox"])', async () => {
        const privacyPolicyCheckbox = page.locator('form >> input[type="checkbox"]');
        await privacyPolicyCheckbox.click();
      });
    });

    await allure.step('Submit form with complex locator', async () => {
      const continueButton = page.locator(
        'form >> input[type="submit"] >> .. >> input[value="Continue"]'
      );
      await continueButton.click();
    });

    await allure.step('Verify successful registration', async () => {
      await expect(page.locator('h1')).toHaveText('Your Account Has Been Created!', {
        timeout: 10000,
      });
    });

    await allure.step('Take screenshot', async () => {
      await page.screenshot({ path: screenshotPath });
    });

    await browser.close();
  });
});
