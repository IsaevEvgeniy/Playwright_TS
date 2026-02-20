## Структура проекта

```
Playwright_TS/
├── .github/
│   └── workflows/
│       └── tests.yml
│
├── src/
│     ├── constants/
│     │     ├── account.constants.ts
│     │     ├── navigation.constants.ts
│     │     ├── urls.constants.ts
│     │     └── user.constants.ts
│     │
│     ├── enums/
│     │     ├── filter.enum.ts
│     │     └── message.enum.ts
│     │
│     ├── factories/
│     │     ├── account.factories.ts
│     │     ├── navigation.factories.ts
│     │     └── user.factories.ts
│     │
│     ├── fixtures/
│     │     ├── auth.fixtures.ts
│     │     └── user.fixtures.ts
│     │
│     ├── pages/
│     │     ├── account.page.ts
│     │     ├── filter.page.ts
│     │     ├── login.page.ts
│     │     ├── navigation.page.ts
│     │     ├── product.page.ts
│     │     ├── register.page.ts
│     │     ├── search.page.ts
│     │     └── success.page.ts
│     │
│     ├── tests/
│     │     ├── cookies.spec.ts
│     │     ├── dropdown.spec.ts
│     │     ├── element-locators.spec.ts
│     │     ├── incognito-mode.spec.ts
│     │     ├── login.spec.ts
│     │     ├── navigation.spec.ts
│     │     ├── register.spec.ts
│     │     └── shopping-cart.spec.ts
│     │
│     └── types/
│           ├── account.type.ts
│           ├── fixtures.type.ts
│           ├── navigation.type.ts
│           ├── urls.type.ts
│           └── user.type.ts
│
├── test-data/
│     ├── screenshots/
│     ├── session/
│     └── videos/
│
├── playwright.config.ts
├── tsconfig.json
├── package-lock.json
├── package.json
└── README.md
```

## Инструкция по запуску

## 1. Установка зависимостей

```bash
npm install
```

## 2. Установка браузеров Playwright

```bash
npx playwright install
```

## 3. Установка Allure

```bash
npm install -D allure-playwright allure-commandline
```

## 4. Запуск тестов

#### Режим без графического интерфейса

```bash
npx playwright test
```

#### Режим с графическим интерфейсом

```bash
npx playwright test --ui
```

#### Запуск в режиме отладки

```bash
npx playwright test --debug
```

#### Запуск тестов с Allure

```bash
npx playwright test --reporter=allure-playwright
```

## 5. Просмотр результатов

#### Генерация отчета Allure

```bash
npx playwright test --reporter=allure-playwright
npx allure generate allure-results --clean -o allure-report
```

#### Открытие отчета Allure

```bash
npx allure open allure-report
```

#### Генерация отчета Playwright

```bash
npx playwright test --reporter=html
```

#### Открытие отчета Playwright

```bash
npx playwright show-report
```
