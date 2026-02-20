import { LEFT_MENU_ITEMS, RIGHT_MENU_ITEMS } from '../constants/account.constants';
import { ILeftMenu, IRightMenu } from '../types/account.type';

export const RightMenuFactory = {
  myAccount: RIGHT_MENU_ITEMS.MY_ACCOUNT,
  editAccount: RIGHT_MENU_ITEMS.EDIT_ACCOUNT,
  password: RIGHT_MENU_ITEMS.PASSWORD,
  addressBook: RIGHT_MENU_ITEMS.ADDRESS_BOOK,
  wishList: RIGHT_MENU_ITEMS.WISH_LIST,
  orderHistory: RIGHT_MENU_ITEMS.ORDER_HISTORY,
  downloads: RIGHT_MENU_ITEMS.DOWNLOADS,
  recurring: RIGHT_MENU_ITEMS.RECURRING,
  returns: RIGHT_MENU_ITEMS.RETURNS,
  transactions: RIGHT_MENU_ITEMS.TRANSACTIONS,
  newsletter: RIGHT_MENU_ITEMS.NEWSLETTER,
  logout: RIGHT_MENU_ITEMS.LOGOUT,
} as IRightMenu;

export const LeftMenuFactory = {
  editInfo: LEFT_MENU_ITEMS.EDIT_INFO,
  changePwd: LEFT_MENU_ITEMS.CHANGE_PWD,
  addressBook: LEFT_MENU_ITEMS.ADDRESS_BOOK,
  wishList: LEFT_MENU_ITEMS.WISH_LIST,
  orderHistory: LEFT_MENU_ITEMS.ORDER_HISTORY,
  downloads: LEFT_MENU_ITEMS.DOWNLOADS,
  rewardPoints: LEFT_MENU_ITEMS.REWARD_POINTS,
  returns: LEFT_MENU_ITEMS.RETURNS,
  transactions: LEFT_MENU_ITEMS.TRANSACTIONS,
  recurring: LEFT_MENU_ITEMS.RECURRING,
  affiliate: LEFT_MENU_ITEMS.AFFILIATE,
  newsletter: LEFT_MENU_ITEMS.NEWSLETTER,
} as ILeftMenu;

export type RightMenuKey = keyof typeof RightMenuFactory;
export type LeftMenuKey = keyof typeof LeftMenuFactory;

export type RightMenuItem = (typeof RightMenuFactory)[RightMenuKey];
export type LeftMenuItem = (typeof LeftMenuFactory)[LeftMenuKey];
