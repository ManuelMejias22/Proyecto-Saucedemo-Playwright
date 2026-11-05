// TC-006 Completar Datos de Envío

import { test, expect } from '@playwright/test'; // Importamos las herramientas de pruebas.
import { LoginPage } from '../pages/LoginPage'; // Importamos las acciones de inicio de sesión.
import { CatalogPage } from '../pages/CatalogPage'; // Importamos las acciones del catálogo.
import { CheckoutPage } from '../pages/CheckoutPage'; // Importamos las acciones del checkout.

test('Debe permitir completar los datos de envío', async ({ page }) => { // Definimos el test de los datos de envío.
  const loginPage = new LoginPage(page); // Creamos el objeto para iniciar sesión.
  const catalogPage = new CatalogPage(page); // Creamos el objeto para seleccionar productos.
  const checkoutPage = new CheckoutPage(page); // Creamos el objeto para completar el checkout.

  await loginPage.goto(); // Abrimos SauceDemo.
  await loginPage.login('standard_user', 'secret_sauce'); // Iniciamos sesión.
  await catalogPage.expectLoaded(); // Verificamos que se cargó el catálogo.
  await catalogPage.addProductByNth(0); // Agregamos un producto al carrito.
  await catalogPage.goToCart(); // Abrimos el carrito.

  await checkoutPage.startCheckout(); // Entramos al formulario de envío.
  await checkoutPage.fillShippingInfo('Manuel', 'Tester', '12345'); // Completamos nombre, apellido y código postal y hacemos clic en Continue.

  await expect(page).toHaveURL(/checkout-step-two\.html/); // Verificamos que llegamos a la pantalla de resumen de la compra.
});