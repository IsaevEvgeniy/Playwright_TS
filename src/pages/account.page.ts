import { Locator, Page } from '@playwright/test';
import {
  LeftMenuFactory,
  LeftMenuItem,
  RightMenuFactory,
  RightMenuItem,
} from '../factories/account.factories';

export class AccountPage {
  readonly page: Page;
  readonly rightMenu: RightMenu;
  readonly leftMenu: LeftMenu;

  constructor(page: Page) {
    this.page = page;
    this.rightMenu = new RightMenu(page);
    this.leftMenu = new LeftMenu(page);
  }
}
export class RightMenu {
  readonly page: Page;
  readonly myAccount: Locator;
  readonly editAccount: Locator;
  readonly password: Locator;
  readonly addressBook: Locator;
  readonly wishList: Locator;
  readonly orderHistory: Locator;
  readonly downloads: Locator;
  readonly recurring: Locator;
  readonly returns: Locator;
  readonly transactions: Locator;
  readonly newsletter: Locator;
  readonly logout: Locator;

  constructor(page: Page) {
    this.page = page;
    this.myAccount = page.locator('#column-right a', { hasText: RightMenuFactory.myAccount });
    this.editAccount = page.locator('#column-right a', { hasText: RightMenuFactory.editAccount });
    this.password = page.locator('#column-right a', { hasText: RightMenuFactory.password });
    this.addressBook = page.locator('#column-right a', { hasText: RightMenuFactory.addressBook });
    this.wishList = page.locator('#column-right a', { hasText: RightMenuFactory.wishList });
    this.orderHistory = page.locator('#column-right a', { hasText: RightMenuFactory.orderHistory });
    this.downloads = page.locator('#column-right a', { hasText: RightMenuFactory.downloads });
    this.recurring = page.locator('#column-right a', { hasText: RightMenuFactory.recurring });
    this.returns = page.locator('#column-right a', { hasText: RightMenuFactory.returns });
    this.transactions = page.locator('#column-right a', { hasText: RightMenuFactory.transactions });
    this.newsletter = page.locator('#column-right a', { hasText: RightMenuFactory.newsletter });
    this.logout = page.locator('#column-right a', { hasText: RightMenuFactory.logout });
  }

  async clickItem(item: RightMenuItem): Promise<void> {
    const itemsMap = {
      [RightMenuFactory.myAccount]: this.myAccount,
      [RightMenuFactory.editAccount]: this.editAccount,
      [RightMenuFactory.password]: this.password,
      [RightMenuFactory.addressBook]: this.addressBook,
      [RightMenuFactory.wishList]: this.wishList,
      [RightMenuFactory.orderHistory]: this.orderHistory,
      [RightMenuFactory.downloads]: this.downloads,
      [RightMenuFactory.recurring]: this.recurring,
      [RightMenuFactory.returns]: this.returns,
      [RightMenuFactory.transactions]: this.transactions,
      [RightMenuFactory.newsletter]: this.newsletter,
      [RightMenuFactory.logout]: this.logout,
    };
    await itemsMap[item].click();
  }
}

export class LeftMenu {
  readonly page: Page;
  readonly editInfo: Locator;
  readonly changePwd: Locator;
  readonly addressBook: Locator;
  readonly wishList: Locator;
  readonly orderHistory: Locator;
  readonly downloads: Locator;
  readonly rewardPoints: Locator;
  readonly returns: Locator;
  readonly transactions: Locator;
  readonly recurring: Locator;
  readonly affiliate: Locator;
  readonly newsletter: Locator;

  constructor(page: Page) {
    this.page = page;

    this.editInfo = page.locator('#content a', { hasText: LeftMenuFactory.editInfo });
    this.changePwd = page.locator('#content a', { hasText: LeftMenuFactory.changePwd });
    this.addressBook = page.locator('#content a', { hasText: LeftMenuFactory.addressBook });
    this.wishList = page.locator('#content a', { hasText: LeftMenuFactory.wishList });
    this.orderHistory = page.locator('#content a', { hasText: LeftMenuFactory.orderHistory });
    this.downloads = page.locator('#content a', { hasText: LeftMenuFactory.downloads });
    this.rewardPoints = page.locator('#content a', { hasText: LeftMenuFactory.rewardPoints });
    this.returns = page.locator('#content a', { hasText: LeftMenuFactory.returns });
    this.transactions = page.locator('#content a', { hasText: LeftMenuFactory.transactions });
    this.recurring = page.locator('#content a', { hasText: LeftMenuFactory.recurring });
    this.affiliate = page.locator('#content a', { hasText: LeftMenuFactory.affiliate });
    this.newsletter = page.locator('#content a', { hasText: LeftMenuFactory.newsletter });
  }

  async clickItem(item: LeftMenuItem): Promise<void> {
    const itemsMap = {
      [LeftMenuFactory.editInfo]: this.editInfo,
      [LeftMenuFactory.changePwd]: this.changePwd,
      [LeftMenuFactory.addressBook]: this.addressBook,
      [LeftMenuFactory.wishList]: this.wishList,
      [LeftMenuFactory.orderHistory]: this.orderHistory,
      [LeftMenuFactory.downloads]: this.downloads,
      [LeftMenuFactory.rewardPoints]: this.rewardPoints,
      [LeftMenuFactory.returns]: this.returns,
      [LeftMenuFactory.transactions]: this.transactions,
      [LeftMenuFactory.recurring]: this.recurring,
      [LeftMenuFactory.affiliate]: this.affiliate,
      [LeftMenuFactory.newsletter]: this.newsletter,
    };
    await itemsMap[item].click();
  }
}
