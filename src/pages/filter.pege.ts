import { Locator, Page, expect } from '@playwright/test';
import { LimitKey, SortKey } from '../enums/filter.enum';

export class Filter {
  readonly page: Page;
  readonly listView: Locator;
  readonly gridView: Locator;
  readonly productCompare: Locator;
  readonly sort: Locator;
  readonly show: Locator;

  constructor(page: Page) {
    this.page = page;
    this.listView = page.locator('#list-view');
    this.gridView = page.locator('#grid-view');
    this.productCompare = page.locator('#compare-total');
    this.sort = page.locator('#input-sort');
    this.show = page.locator('#input-limit');
  }

  async changeView(view: 'list' | 'grid'): Promise<void> {
    const viewButtons = {
      list: this.listView,
      grid: this.gridView,
    };
    await expect(viewButtons[view]).toBeVisible;
    await viewButtons[view].click();
  }

  async clickCompare(): Promise<void> {
    await this.productCompare.click();
  }

  async selectSort(option: SortKey): Promise<void> {
    await this.sort.selectOption(option);
  }

  async selectLimit(limit: LimitKey): Promise<void> {
    await this.show.selectOption(limit);
  }
}
