import { Page } from '@playwright/test';
import { UserLoginValidRole, UserRegistrationValidRole } from '../factories/user.factories';

export type AuthFixtures = {
  newUserPage: (role: UserRegistrationValidRole) => Promise<Page>;
  loggedInPage: (role: UserLoginValidRole) => Promise<Page>;
};
