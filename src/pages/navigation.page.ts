import { Locator, Page } from '@playwright/test';
import {
  CategoriesFactory,
  CategoriesItem,
  ComponentItem,
  DesktopItem,
  LaptopItem,
  LeftMenuFactory,
  LeftMenuItem,
  MP3Item,
} from '../factories/navigation.factories';

export class Navigation {
  readonly page: Page;
  readonly navbarMenu: NavbarMenu;
  readonly leftMenu: LeftMenu;

  constructor(page: Page) {
    this.page = page;
    this.navbarMenu = new NavbarMenu(page);
    this.leftMenu = new LeftMenu(page);
  }
}

export class NavbarMenu {
  readonly page: Page;
  readonly desktops: Locator;
  readonly laptopsNotebooks: Locator;
  readonly components: Locator;
  readonly tablets: Locator;
  readonly software: Locator;
  readonly phonesPDAs: Locator;
  readonly cameras: Locator;
  readonly mp3Players: Locator;

  constructor(page: Page) {
    this.page = page;
    this.desktops = page.locator('.dropdown', { hasText: CategoriesFactory.Desktops });
    this.laptopsNotebooks = page.locator('.dropdown', {
      hasText: CategoriesFactory.LaptopsNotebooks,
    });
    this.components = page.locator('.dropdown', { hasText: CategoriesFactory.Components });
    this.tablets = page.locator('.dropdown', { hasText: CategoriesFactory.Tablets });
    this.software = page.locator('.dropdown', { hasText: CategoriesFactory.Software });
    this.phonesPDAs = page.locator('.dropdown', { hasText: CategoriesFactory.PhonesPDAs });
    this.cameras = page.locator('.dropdown', { hasText: CategoriesFactory.Cameras });
    this.mp3Players = page.locator('.dropdown', { hasText: CategoriesFactory.MP3Players });
  }

  async clickDesktops(item: DesktopItem): Promise<void> {
    await this.desktops.hover();
    await this.page.locator('.dropdown-inner');
    await this.page.getByRole('link', { name: item }).click();
  }

  async clickLaptopsNotebooks(item: LaptopItem): Promise<void> {
    await this.laptopsNotebooks.hover();
    await this.page.locator('.dropdown-menu');
    await this.page.getByRole('link', { name: item }).click();
  }

  async clickСomponents(item: ComponentItem): Promise<void> {
    await this.components.hover();
    await this.page.locator('.dropdown-inner');
    await this.page.getByRole('link', { name: item }).click();
  }

  async clickMP3Players(item: MP3Item): Promise<void> {
    await this.mp3Players.hover();
    await this.page.locator('.dropdown-inner');
    await this.page.getByRole('link', { name: item }).click();
  }

  async clickCategory(category: CategoriesItem): Promise<void> {
    const categoryMap = {
      [CategoriesFactory.Desktops]: this.desktops,
      [CategoriesFactory.LaptopsNotebooks]: this.laptopsNotebooks,
      [CategoriesFactory.Components]: this.components,
      [CategoriesFactory.Tablets]: this.tablets,
      [CategoriesFactory.Software]: this.software,
      [CategoriesFactory.PhonesPDAs]: this.phonesPDAs,
      [CategoriesFactory.Cameras]: this.cameras,
      [CategoriesFactory.MP3Players]: this.mp3Players,
    };
    await categoryMap[category].click();
  }
}

export class LeftMenu {
  readonly page: Page;
  readonly desktops: Locator;
  readonly laptopsNotebooks: Locator;
  readonly components: Locator;
  readonly tablets: Locator;
  readonly software: Locator;
  readonly phonesPDAs: Locator;
  readonly cameras: Locator;
  readonly mp3Players: Locator;

  constructor(page: Page) {
    this.page = page;
    this.desktops = page.locator('.list-group-item', { hasText: LeftMenuFactory.Desktops });
    this.laptopsNotebooks = page.locator('.list-group-item', {
      hasText: LeftMenuFactory.LaptopsNotebooks,
    });
    this.components = page.locator('.list-group-item', {
      hasText: LeftMenuFactory.Components,
    });
    this.tablets = page.locator('.list-group-item', { hasText: LeftMenuFactory.Tablets });
    this.software = page.locator('.list-group-item', { hasText: LeftMenuFactory.Software });
    this.phonesPDAs = page.locator('.list-group-item', { hasText: LeftMenuFactory.PhonesPDAs });
    this.cameras = page.locator('.list-group-item', { hasText: LeftMenuFactory.Cameras });
    this.mp3Players = page.locator('.list-group-item', { hasText: LeftMenuFactory.MP3Players });
  }

  async clickCategory(category: LeftMenuItem): Promise<void> {
    const categoryMap = {
      [LeftMenuFactory.Desktops]: this.desktops,
      [LeftMenuFactory.LaptopsNotebooks]: this.laptopsNotebooks,
      [LeftMenuFactory.Components]: this.components,
      [LeftMenuFactory.Tablets]: this.tablets,
      [LeftMenuFactory.Software]: this.software,
      [LeftMenuFactory.PhonesPDAs]: this.phonesPDAs,
      [LeftMenuFactory.Cameras]: this.cameras,
      [LeftMenuFactory.MP3Players]: this.mp3Players,
    };
    await categoryMap[category].click();
  }
}
