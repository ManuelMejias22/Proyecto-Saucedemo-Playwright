import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { CatalogPage } from '../pages/CatalogPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test.describe('Flujo completo de compra en SauceDemo', () => {

  test('Debe permitir a un usuario comprar productos exitosamente', async ({ page }) => {
    // 1. Inicialización de Page Objects
    const loginPage = new LoginPage(page);
    const catalogPage = new CatalogPage(page);
    const checkoutPage = new CheckoutPage(page);

    // Inicio de Sesión
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    // Selección de Productos en el Catálogo
    await catalogPage.expectLoaded();
    await catalogPage.sortBy('Price (low to high)'); // Ordenamos los productos por precio de menor a mayor
    await catalogPage.addProductByNth(0);
    await catalogPage.addProductByNth(1);
    await catalogPage.goToCart();

    // Carrito e Inicio de Checkout
    await checkoutPage.expectItemsInCart(2);
    await checkoutPage.startCheckout();

    // Formulario de Envío
    await checkoutPage.fillShippingInfo('Manuel', 'Tester', '12345');

    // Confirmación y Validación Final
    await checkoutPage.finishOrder();
    await checkoutPage.expectOrderComplete();
  });

});