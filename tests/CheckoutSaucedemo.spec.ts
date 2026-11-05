// TC-005 Acceder al Checkout

import { test, expect } from '@playwright/test'; // Importamos las herramientas para ejecutar y verificar el test.
import { LoginPage } from '../pages/LoginPage'; // Importamos la clase de inicio de sesión.
import { CatalogPage } from '../pages/CatalogPage'; // Importamos la clase del catálogo.
import { CheckoutPage } from '../pages/CheckoutPage'; // Importamos la clase del carrito y checkout.

test('Debe permitir iniciar el checkout', async ({ page }) => { // Definimos el test que comprueba el acceso al checkout.
  const loginPage = new LoginPage(page); // Creamos el objeto de inicio de sesión.
  const catalogPage = new CatalogPage(page); // Creamos el objeto del catálogo.
  const checkoutPage = new CheckoutPage(page); // Creamos el objeto del checkout.

  await loginPage.goto(); // Abrimos SauceDemo.
  await loginPage.login('standard_user', 'secret_sauce'); // Iniciamos sesión.

  await catalogPage.expectLoaded(); // Comprobamos que estamos en el catálogo.
  await catalogPage.addProductByNth(0); // Agregamos un producto para preparar el escenario.
  await catalogPage.goToCart(); // Entramos al carrito.

  await checkoutPage.startCheckout(); // Hacemos clic en Checkout y verificamos que se abra el formulario de envío.
  await expect(page).toHaveURL(/checkout-step-one\.html/); // Comprobamos nuevamente la URL del formulario; es redundante porque startCheckout ya lo verifica.
});