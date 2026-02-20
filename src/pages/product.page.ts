import { Locator, Page, expect } from '@playwright/test';

export class ProductPage {
  readonly page: Page;
  readonly qty: Locator;
  readonly cart: Locator;
  readonly message: Locator;
  readonly shoppingCart: Locator;

  constructor(page: Page) {
    this.page = page;
    this.qty = page.getByRole('textbox', { name: 'Qty' });
    this.cart = page.getByRole('button', { name: 'Add to Cart', exact: true });
    this.message = page.locator('.alert-success');
    this.shoppingCart = page.getByRole('link', { name: 'shopping cart', exact: true });
  }

  async setQuantity(quantity: string): Promise<void> {
    await this.qty.fill(quantity);
    await expect(this.qty).toHaveValue(quantity);
  }

  async addToCartWithQuantity(quantity: string): Promise<void> {
    await this.setQuantity(quantity);
    await this.cart.click();
  }

  async verifySuccessMessage(name: string): Promise<void> {
    await expect(this.message).toBeVisible();
    await expect(this.message).toContainText(
      `Success: You have added ${name} to your shopping cart`
    );
  }

  async goToCart() {
    await this.shoppingCart.click();
  }
}
