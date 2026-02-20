import { Locator, Page, expect } from '@playwright/test';

export class SuccessPage {
  readonly page: Page;
  readonly title: Locator;
  readonly continueButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.getByText('Your Account Has Been Created!');
    this.continueButton = page.getByText('Continue');
  }

  async verifySuccess(): Promise<void> {
    await expect(this.title).toBeVisible({ timeout: 10000 });
  }

  async clickContinue(): Promise<void> {
    await this.continueButton.click();
  }
}
