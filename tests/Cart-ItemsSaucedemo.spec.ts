// TC-004 Validar productos en el carrito

import { test } from '@playwright/test'; // Importamos la función para definir tests.
import { LoginPage } from '../pages/LoginPage'; // Importamos las acciones de inicio de sesión.
import { CatalogPage } from '../pages/CatalogPage'; // Importamos las acciones del catálogo.
import { CheckoutPage } from '../pages/CheckoutPage'; // Importamos las acciones y verificaciones del carrito y checkout.

test('Debe mostrar dos productos en el carrito', async ({ page }) => { // Definimos el test que comprobará la cantidad de productos.
  const loginPage = new LoginPage(page); // Creamos el objeto de LoginPage.
  const catalogPage = new CatalogPage(page); // Creamos el objeto de CatalogPage.
  const checkoutPage = new CheckoutPage(page); // Creamos el objeto de CheckoutPage.

  await loginPage.goto(); // Abrimos SauceDemo.
  await loginPage.login('standard_user', 'secret_sauce'); // Iniciamos sesión para poder acceder a los productos.

  await catalogPage.expectLoaded(); // Verificamos que el catálogo esté visible.
  await catalogPage.addProductByNth(0); // Agregamos el primer producto.
  await catalogPage.addProductByNth(1); // Agregamos el segundo producto.
  await catalogPage.goToCart(); // Abrimos el carrito de compras.

  await checkoutPage.expectItemsInCart(2); // Verificamos que existan exactamente dos productos en el carrito.
});