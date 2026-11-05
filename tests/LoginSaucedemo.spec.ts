// TC-001 Iniciar Sesion Correctamente

import { test, expect } from '@playwright/test'; // Importamos las herramientas para ejecutar el test y verificar resultados.
import { LoginPage } from '../pages/LoginPage'; // Importamos la clase que contiene las acciones del inicio de sesión.

test('Debe iniciar sesión correctamente', async ({ page }) => { // Definimos un test y recibimos una página nueva de Playwright.
  const loginPage = new LoginPage(page); // Creamos el objeto que nos permite utilizar los métodos de LoginPage.

  await loginPage.goto(); // Abrimos la página de inicio de SauceDemo.
  await loginPage.login('standard_user', 'secret_sauce'); // Escribimos las credenciales y hacemos clic en Login.

  await expect(page).toHaveURL(/inventory\.html/); // Verificamos que hayamos llegado al catálogo de productos.
});