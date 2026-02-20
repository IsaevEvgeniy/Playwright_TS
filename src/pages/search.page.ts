import { Locator, Page } from '@playwright/test';

export class Search {
  readonly page: Page;
  readonly input: Locator;
  readonly button: Locator;
  readonly result: Locator;

  constructor(page: Page) {
    this.page = page;
    this.input = page.locator('#search > input');
    this.button = page.locator('[class="btn btn-default btn-lg"]');
    this.result = page.locator('h4 a');
  }

  async fillField(name: string): Promise<void> {
    await this.input.fill(name);
    await this.button.click();
  }

  async selectProduct(name: string): Promise<void> {
    await this.result.filter({ hasText: name }).click();
  }
}
