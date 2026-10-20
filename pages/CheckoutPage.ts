import { Page, Locator, expect } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;
  readonly cartLink: Locator;
  readonly cartItems: Locator;
  readonly checkoutButton: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly postalCodeInput: Locator;
  readonly continueButton: Locator;
  readonly finishButton: Locator;
  readonly completeHeader: Locator;

  constructor(page: Page) {
    this.page = page;

    // Locators de accesibilidad uniformes con getByRole
    this.cartLink = page.getByRole('link', { name: /cart/i });
    this.cartItems = page.locator('.cart_item');
    this.checkoutButton = page.getByRole('button', { name: 'Checkout' });
    
    // Inputs del formulario usando getByRole
    this.firstNameInput = page.getByRole('textbox', { name: 'First Name' });
    this.lastNameInput = page.getByRole('textbox', { name: 'Last Name' });
    this.postalCodeInput = page.getByRole('textbox', { name: 'Zip/Postal Code' });

    // Botones del flujo
    this.continueButton = page.getByRole('button', { name: 'Continue' });
    this.finishButton = page.getByRole('button', { name: 'Finish' });

    // Mensaje final
    this.completeHeader = page.getByRole('heading', { name: 'Thank you for your order!' });
  }

  // Abrimos el carrito y verificamos que la URL sea la correcta
  async openCart() {
    await this.cartLink.click();
    await expect(this.page).toHaveURL(/cart\.html/);
  }

  // Verificamos el número de productos presentes en el carrito
  async expectItemsInCart(count: number) {
    await expect(this.cartItems).toHaveCount(count);
  }

  // Iniciamos el proceso de checkout
  async startCheckout() {
    await this.checkoutButton.click();
    await expect(this.page).toHaveURL(/checkout-step-one\.html/);
  }

  // Completamos los datos de envío y avanzamos
  async fillShippingInfo(firstName: string, lastName: string, postalCode: string) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(postalCode);
    await this.continueButton.click();
  }

  // Finalizamos la compra
  async finishOrder() {
    await this.finishButton.click();
  }

  // Validamos el mensaje de éxito final
  async expectOrderComplete() {
    await expect(this.completeHeader).toBeVisible();
  }
}