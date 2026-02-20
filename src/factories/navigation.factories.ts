import {
  CATEGORIES_ITEMS,
  COMPONENT_ITEMS,
  DESKTOP_ITEMS,
  LAPTOP_ITEMS,
  LEFT_MENU_ITEMS,
  MP3_PLAYER_ITEMS,
} from '../constants/navigation.constants';

import {
  ICategories,
  IComponent,
  IDesktop,
  ILaptop,
  ILeftMenu,
  IMP3Player,
} from '../types/navigation.type';

export const CategoriesFactory = {
  Desktops: CATEGORIES_ITEMS.DESKTOPS,
  LaptopsNotebooks: CATEGORIES_ITEMS.LAPTOPS,
  Components: CATEGORIES_ITEMS.COMPONENTS,
  Tablets: CATEGORIES_ITEMS.TABLETS,
  Software: CATEGORIES_ITEMS.SOFTWARE,
  PhonesPDAs: CATEGORIES_ITEMS.PHONES_PDAS,
  Cameras: CATEGORIES_ITEMS.CAMERAS,
  MP3Players: CATEGORIES_ITEMS.MP3_PLAYERS,
} as ICategories;

export const DesktopFactory = {
  PC: DESKTOP_ITEMS.PC,
  Mac: DESKTOP_ITEMS.MAC,
  ShowAll: DESKTOP_ITEMS.SHOW_ALL,
} as IDesktop;

export const LaptopFactory = {
  Macs: LAPTOP_ITEMS.MACS,
  Windows: LAPTOP_ITEMS.WINDOWS,
  ShowAll: LAPTOP_ITEMS.SHOW_ALL,
} as ILaptop;

export const ComponentFactory = {
  Mice: COMPONENT_ITEMS.MICE,
  Monitors: COMPONENT_ITEMS.MONITORS,
  Printers: COMPONENT_ITEMS.PRINTERS,
  Scanners: COMPONENT_ITEMS.SCANNERS,
  WebCameras: COMPONENT_ITEMS.WEB_CAMERAS,
  ShowAll: COMPONENT_ITEMS.SHOW_ALL,
} as IComponent;

export const MP3Factory = {
  Test4: MP3_PLAYER_ITEMS.TEST4,
  Test5: MP3_PLAYER_ITEMS.TEST5,
  Test6: MP3_PLAYER_ITEMS.TEST6,
  Test7: MP3_PLAYER_ITEMS.TEST7,
  Test8: MP3_PLAYER_ITEMS.TEST8,
  Test9: MP3_PLAYER_ITEMS.TEST9,
  Test11: MP3_PLAYER_ITEMS.TEST11,
  Test12: MP3_PLAYER_ITEMS.TEST12,
  Test13: MP3_PLAYER_ITEMS.TEST13,
  Test14: MP3_PLAYER_ITEMS.TEST14,
  Test15: MP3_PLAYER_ITEMS.TEST15,
  Test16: MP3_PLAYER_ITEMS.TEST16,
  Test17: MP3_PLAYER_ITEMS.TEST17,
  Test18: MP3_PLAYER_ITEMS.TEST18,
  Test19: MP3_PLAYER_ITEMS.TEST19,
  Test20: MP3_PLAYER_ITEMS.TEST20,
  Test21: MP3_PLAYER_ITEMS.TEST21,
  Test22: MP3_PLAYER_ITEMS.TEST22,
  Test23: MP3_PLAYER_ITEMS.TEST23,
  Test24: MP3_PLAYER_ITEMS.TEST24,
  ShowAll: MP3_PLAYER_ITEMS.SHOW_ALL,
} as IMP3Player;

export const LeftMenuFactory = {
  Desktops: LEFT_MENU_ITEMS.DESKTOPS,
  LaptopsNotebooks: LEFT_MENU_ITEMS.LAPTOPS,
  Components: LEFT_MENU_ITEMS.COMPONENTS,
  Tablets: LEFT_MENU_ITEMS.TABLETS,
  Software: LEFT_MENU_ITEMS.SOFTWARE,
  PhonesPDAs: LEFT_MENU_ITEMS.PHONES_PDAS,
  Cameras: LEFT_MENU_ITEMS.CAMERAS,
  MP3Players: LEFT_MENU_ITEMS.MP3_PLAYERS,
} as ILeftMenu;

export type CategoriesMenuKey = keyof typeof CategoriesFactory;
export type DesktopMenuKey = keyof typeof DesktopFactory;
export type LaptopMenuKey = keyof typeof LaptopFactory;
export type ComponentMenuKey = keyof typeof ComponentFactory;
export type MP3FactoryMenuKey = keyof typeof MP3Factory;
export type LeftMenuKey = keyof typeof LeftMenuFactory;

export type CategoriesItem = (typeof CategoriesFactory)[CategoriesMenuKey];
export type DesktopItem = (typeof DesktopFactory)[DesktopMenuKey];
export type LaptopItem = (typeof LaptopFactory)[LaptopMenuKey];
export type ComponentItem = (typeof ComponentFactory)[ComponentMenuKey];
export type MP3Item = (typeof MP3Factory)[MP3FactoryMenuKey];
export type LeftMenuItem = (typeof LeftMenuFactory)[LeftMenuKey];
