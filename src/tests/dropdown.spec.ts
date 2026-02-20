import { Browser, expect, Page, test } from '@playwright/test';
import { allure } from 'allure-playwright';
import { chromium } from 'playwright';
import { URLS } from '../constants/urls.constants';

test('Dropdown selection by value/label/index', async () => {
  await allure.epic('UI Elements');
  await allure.feature('Dropdown');
  await allure.story('Select by value/label/index');
  await allure.severity('normal');

  let browser: Browser;
  let page: Page;

  await allure.step('Launch browser and open page', async () => {
    browser = await chromium.launch({
      headless: true,
      channel: 'chrome',
    });

    page = await browser.newPage();
    await page.goto(URLS.MAGUPDATE);
  });

  const countryDropDown = 'select#Contact_CountryCode';

  await allure.step('Select by value: "AM"', async () => {
    await page.selectOption(countryDropDown, { value: 'AM' });
  });

  await allure.step('Select by label: "Angola"', async () => {
    await page.selectOption(countryDropDown, { label: 'Angola' });
  });

  await allure.step('Select by index: 0 (first option)', async () => {
    await page.selectOption(countryDropDown, { index: 0 });
  });

  await allure.step('Find and select "Zambia"', async () => {
    const allOptions = await page.$$(countryDropDown + ' > option');
    console.log('Total options:', allOptions.length);

    for (const elem of allOptions) {
      const text = await elem.textContent();
      console.log(text);
      if (text === 'Zambia') {
        await page.selectOption(countryDropDown, { label: 'Zambia' });
        await expect(page.locator(countryDropDown)).toHaveValue('ZM');
        break;
      }
    }
  });

  await allure.step('Close browser', async () => {
    await browser.close();
  });
});
