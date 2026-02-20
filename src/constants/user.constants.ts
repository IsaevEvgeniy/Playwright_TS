export const USER_DATA = {
  TESTER: {
    FIRST_NAME: 'John',
    LAST_NAME: 'Doe',
    EMAIL: 'playwright_1@mail.com',
    PHONE: '+1234567890',
    PASSWORD: 'TestPassword123!',
    PASSWORD_CONFIRM: 'TestPassword123!',
  },
  CUSTOMER: {
    FIRST_NAME: 'Jane',
    LAST_NAME: 'Smith',
    EMAIL: 'playwright_3@mail.com',
    PHONE: '+1234567891',
    PASSWORD: 'TestPassword456!',
    PASSWORD_CONFIRM: 'TestPassword456!',
  },
  MODERATOR: {
    FIRST_NAME: 'Bob',
    LAST_NAME: 'Johnson',
    EMAIL: `playwright${new Date().getTime()}@mail.com`,
    PHONE: '+1234567892',
    PASSWORD: 'TestPassword789!',
    PASSWORD_CONFIRM: 'TestPassword789!',
  },
} as const;
