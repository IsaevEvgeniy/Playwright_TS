import { Locator, Page } from '@playwright/test';
import { URLS } from '../constants/urls.constants';
import { UserFactory, UserRegistrationValidRole } from '../factories/user.factories';

export class RegisterPage {
  readonly page: Page;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly eMail: Locator;
  readonly phone: Locator;
  readonly password: Locator;
  readonly passwordConfirm: Locator;
  readonly privacyPolicyCheckbox: Locator;
  readonly continueButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstName = page.locator('#input-firstname');
    this.lastName = page.locator('#input-lastname');
    this.eMail = page.locator('#input-email');
    this.phone = page.locator('#input-telephone');
    this.password = page.locator('#input-password');
    this.passwordConfirm = page.locator('#input-confirm');
    this.privacyPolicyCheckbox = page.locator('input[type="checkbox"]');
    this.continueButton = page.getByRole('button', { name: 'Continue' });
  }

  async navigate(): Promise<void> {
    await this.page.goto(URLS.REGISTER);
  }

  async registerAs(role: UserRegistrationValidRole): Promise<void> {
    const user = UserFactory.registration.valid[role];
    await this.firstName.fill(user.firstName);
    await this.lastName.fill(user.lastName);
    await this.eMail.fill(user.email);
    await this.phone.fill(user.phone);
    await this.password.fill(user.password);
    await this.passwordConfirm.fill(user.passwordConfirm);
    await this.privacyPolicyCheckbox.click();
    await this.continueButton.click();
  }
}
