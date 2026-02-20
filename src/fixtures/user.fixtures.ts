import { test as base } from '@playwright/test';
import { UserLoginValidRole } from '../factories/user.factories';
import { LoginPage } from '../pages/login.page';
import { AuthFixtures } from '../types/fixtures.type';

export const test = base.extend<AuthFixtures>({
  loggedInPage: async ({ page }, use) => {
    const loginUser = async (role: UserLoginValidRole) => {
      const loginPage = new LoginPage(page);
      await loginPage.navigate();
      await loginPage.loginValid(role);
      return page;
    };
    await use(loginUser);
  },
});
