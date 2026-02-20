import { USER_DATA } from '../constants/user.constants';
import { IUserLogin, IUserRegistration } from '../types/user.type';

export const UserFactory = {
  registration: {
    valid: {
      tester: {
        firstName: USER_DATA.TESTER.FIRST_NAME,
        lastName: USER_DATA.TESTER.LAST_NAME,
        email: USER_DATA.TESTER.EMAIL,
        phone: USER_DATA.TESTER.PHONE,
        password: USER_DATA.TESTER.PASSWORD,
        passwordConfirm: USER_DATA.TESTER.PASSWORD_CONFIRM,
      } as IUserRegistration,
      customer: {
        firstName: USER_DATA.CUSTOMER.FIRST_NAME,
        lastName: USER_DATA.CUSTOMER.LAST_NAME,
        email: USER_DATA.CUSTOMER.EMAIL,
        phone: USER_DATA.CUSTOMER.PHONE,
        password: USER_DATA.CUSTOMER.PASSWORD,
        passwordConfirm: USER_DATA.CUSTOMER.PASSWORD_CONFIRM,
      } as IUserRegistration,
      moderator: {
        firstName: USER_DATA.MODERATOR.FIRST_NAME,
        lastName: USER_DATA.MODERATOR.LAST_NAME,
        email: USER_DATA.MODERATOR.EMAIL,
        phone: USER_DATA.MODERATOR.PHONE,
        password: USER_DATA.MODERATOR.PASSWORD,
        passwordConfirm: USER_DATA.MODERATOR.PASSWORD_CONFIRM,
      } as IUserRegistration,
    },
    invalid: {
      testerNoPassword: {
        firstName: USER_DATA.TESTER.FIRST_NAME,
        lastName: USER_DATA.TESTER.LAST_NAME,
        email: USER_DATA.TESTER.EMAIL,
        phone: USER_DATA.TESTER.PHONE,
        passwordConfirm: USER_DATA.TESTER.PASSWORD_CONFIRM,
      } as Partial<Omit<IUserRegistration, 'password'>>,
    },
  },

  login: {
    valid: {
      tester: {
        email: USER_DATA.TESTER.EMAIL,
        password: USER_DATA.TESTER.PASSWORD,
      } as IUserLogin,
      customer: {
        email: USER_DATA.CUSTOMER.EMAIL,
        password: USER_DATA.CUSTOMER.PASSWORD,
      } as IUserLogin,
      moderator: {
        email: USER_DATA.MODERATOR.EMAIL,
        password: USER_DATA.MODERATOR.PASSWORD,
      } as IUserLogin,
    },

    invalid: {
      testerEmptyEmail: {
        email: '',
        password: USER_DATA.TESTER.PASSWORD,
      } as Partial<Pick<IUserLogin, 'email' | 'password'>>,
    },
  },
};

export type UserRegistrationValidRole = keyof typeof UserFactory.registration.valid;
export type UserLoginValidRole = keyof typeof UserFactory.login.valid;
export type UserRegistrationInvalidRole = keyof typeof UserFactory.registration.invalid;
export type UserLoginInvalidRole = keyof typeof UserFactory.login.invalid;
