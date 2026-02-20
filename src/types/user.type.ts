export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserRegistration extends IUserLogin {
  firstName: string;
  lastName: string;
  phone: string;
  passwordConfirm: string;
}
