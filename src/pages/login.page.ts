import { Locator, Page, expect } from '@playwright/test';
import { URLS } from '../constants/urls.constants';
import { MESSAGES_ERROR, MessagesKey } from '../enums/message.enum';
import { UserFactory, UserLoginInvalidRole, UserLoginValidRole } from '../factories/user.factories';

export class LoginPage {
  readonly page: Page;
  readonly email: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;
  readonly message: Locator;

  constructor(page: Page) {
    this.page = page;
    this.email = page.locator('#input-email');
    this.password = page.locator('#input-password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.message = page.locator('.alert-danger');
  }

  async navigate(): Promise<void> {
    await this.page.goto(URLS.LOGIN);
    await expect(this.email).toBeVisible();
  }

  async loginValid(role: UserLoginValidRole): Promise<void> {
    const user = UserFactory.login.valid[role];
    await this.email.fill(user.email);
    await this.password.fill(user.password);
    await this.loginButton.click();
  }

  async loginInvalid(role: UserLoginInvalidRole): Promise<void> {
    const user = UserFactory.login.invalid[role];
    await this.email.fill(user.email!);
    await this.password.fill(user.password!);
    await this.loginButton.click();
    await expect(this.page).not.toHaveURL(URLS.ACCOUNT);
  }

  async verifyMessageError(key: MessagesKey): Promise<void> {
    const errorMessage = MESSAGES_ERROR[key];
    await expect(this.message).toHaveText(errorMessage);
  }
}
