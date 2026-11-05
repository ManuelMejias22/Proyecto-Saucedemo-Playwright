// TC-003 Agregar Producto al Carrito

import { test, expect } from '@playwright/test'; // Importamos las herramientas para ejecutar y verificar el test.
import { LoginPage } from '../pages/LoginPage'; // Importamos las acciones del inicio de sesión.
import { CatalogPage } from '../pages/CatalogPage'; // Importamos las acciones del catálogo de productos.

test('Debe agregar un producto al carrito', async ({ page }) => { // Creamos el test y recibimos una página nueva.
  const loginPage = new LoginPage(page); // Creamos el objeto para iniciar sesión.
  const catalogPage = new CatalogPage(page); // Creamos el objeto para interactuar con el catálogo.

  await loginPage.goto(); // Abrimos SauceDemo.
  await loginPage.login('standard_user', 'secret_sauce'); // Iniciamos sesión porque es necesario para acceder al catálogo.

  await catalogPage.expectLoaded(); // Comprobamos que el catálogo esté visible antes de continuar.
  await catalogPage.addProductByNth(0); // Agregamos el primer producto disponible; el índice comienza en cero.

  await expect(page.locator('.shopping_cart_badge')).toHaveText('1'); // Verificamos que el contador del carrito muestre un producto.
});