export enum MESSAGES_ERROR {
  EXCEEDED_ATTEMPTS = 'Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour.',
  INVALID_CREDENTIALS = 'Warning: No match for E-Mail Address and/or Password.',
}

export type MessagesKey = keyof typeof MESSAGES_ERROR;
