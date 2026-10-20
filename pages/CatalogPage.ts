import { Page, Locator, expect } from '@playwright/test';

export class CatalogPage {
  readonly page: Page;
  readonly title: Locator;
  readonly sortMenu: Locator;
  readonly cartButton: Locator;

  constructor(page: Page) {
    this.page = page;

    // Título de la página ("Products")
    this.title = page.getByText('Products');

    // Menú desplegable para ordenar productos
    this.sortMenu = page.getByRole('combobox');

    // Botón del carrito
    this.cartButton = page.locator('[data-test="shopping-cart-link"]');
  }

  // Verificamos que cargó la pantalla del catálogo
  async expectLoaded() {
    await expect(this.title).toBeVisible();
  }

  // Ordenamos la lista usando el menú desplegable
  async sortBy(optionLabel: string) {
    await this.sortMenu.selectOption({ label: optionLabel });
  }

  // Agregamos un producto al carrito según su posición (0 = primero, 1 = segundo, etc.)
  async addProductByNth(index: number) {
    await this.page.getByRole('button', { name: 'Add to cart' }).nth(index).click();
  }

  // Hacemos clic en el icono del carrito para ir a la vista de compras
  async goToCart() {
    await this.cartButton.click();
  }
}