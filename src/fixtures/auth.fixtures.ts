import { test as base } from '@playwright/test';
import { UserRegistrationValidRole } from '../factories/user.factories';
import { RegisterPage } from '../pages/register.page';
import { SuccessPage } from '../pages/success.page';
import { AuthFixtures } from '../types/fixtures.type';

export const test = base.extend<AuthFixtures>({
  newUserPage: async ({ page }, use) => {
    const registerUser = async (role: UserRegistrationValidRole) => {
      const registerPage = new RegisterPage(page);
      await registerPage.navigate();
      await registerPage.registerAs(role);
      const successPage = new SuccessPage(page);
      await successPage.verifySuccess();
      await successPage.clickContinue();
      return page;
    };
    await use(registerUser);
  },
});
