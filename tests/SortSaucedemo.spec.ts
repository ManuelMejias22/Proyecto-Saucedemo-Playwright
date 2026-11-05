// TC-002 Ordenar productos en el carrito

import { test, expect } from '@playwright/test'; // Importamos las herramientas de pruebas y aserciones.
import { LoginPage } from '../pages/LoginPage'; // Importamos la clase del inicio de sesión.
import { CatalogPage } from '../pages/CatalogPage'; // Importamos la clase del catálogo.

test('Debe ordenar productos por precio de menor a mayor', async ({ page }) => { // Definimos el test de ordenamiento.
  const loginPage = new LoginPage(page); // Creamos el objeto para iniciar sesión.
  const catalogPage = new CatalogPage(page); // Creamos el objeto para ordenar los productos.

  await loginPage.goto(); // Abrimos la página de SauceDemo.
  await loginPage.login('standard_user', 'secret_sauce'); // Iniciamos sesión para entrar al catálogo.

  await catalogPage.expectLoaded(); // Verificamos que el catálogo esté cargado.
  await catalogPage.sortBy('Price (low to high)'); // Seleccionamos el orden de precio ascendente.

  await expect(catalogPage.sortMenu).toHaveValue('lohi'); // Verificamos que el selector tenga seleccionado el valor correspondiente a precio ascendente.
});