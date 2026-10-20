  // Importamos los módulos 'test' y 'expect' desde la librería oficial de Playwright
  import { test, expect } from '@playwright/test';

  // Definimos un bloque de prueba principal usando test()
  test('Flujo completo en SauceDemo (getByRole)', async ({ page }) => {

     // PASO 1: Navegación a la página de login
 
  // Navegamos a la URL de SauceDemo
  await page.goto('https://www.saucedemo.com/');

  // Verificamos que el título de la pestaña del navegador sea exactamente el esperado
  await expect(page).toHaveTitle('Swag Labs');

  // PASO 2: Inicio de sesión (Login)

  // Usamos getByRole para ubicar los campos Username y Password
  await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');
  await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');

  // Usamos getByRole para ubicar el botón de inicio de sesión
  await page.getByRole('button', { name: 'Login' }).click();

  // Verificamos que la URL haya cambiado a la sección de inventario
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

  // Comprobamos que el título principal de productos sea visible usando getByRole
  await expect(page.locator('[data-test="title"]')).toHaveText('Products')

  // PASO 3: Ordenar productos por precio (Low to High/menor a mayor)

  // Localizamos el combobox de ordenamiento por su rol de accesibilidad y seleccionamos la opción por su etiqueta/texto
  await page.getByRole('combobox').selectOption({ label: 'Price (low to high)' });

  // Verificamos que la opción seleccionada tenga el valor correspondiente
  await expect(page.getByRole('combobox')).toHaveValue('lohi');

  // PASO 4: Agregar productos al carrito

  // Usamos getByRole para ubicar los botones por su nombre accesible
  await page.getByRole('button', { name: 'Add to cart' }).nth(0).click(); // Agregamos el primer producto     (posición 0)
  await page.getByRole('button', { name: 'Add to cart' }).nth(0).click(); // El segundo producto pasa a ser     el primero con este texto, por eso usamos nuevamente la posición (0)

  // Verificamos que el ícono del carrito muestre el número de ítems agregados
  await expect(page.getByRole('button', { name: 'Cart, 2 items' })).toBeVisible();

  // PASO 5: Ir al carrito y validar productos

  // Hacemos clic en el boton del carrito utilizando getByRole
  await page.getByRole('button', { name: 'Cart, 2 items' }).click();

  // Validamos que la URL actual corresponda a la vista del carrito
  await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');

  // Verificamos que los productos aparezcan en el carrito usando getByText
  await expect(page.getByText('Sauce Labs Onesie')).toBeVisible();
  await expect(page.getByText('Sauce Labs Bike Light')).toBeVisible();

  // PASO 6: Iniciar el proceso de Checkout

  // Hacemos clic en el botón "Checkout" usando getByRole
  await page.getByRole('button', { name: 'Checkout' }).click();

  // Verificamos que nos encontremos en la primera pantalla del formulario
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');

  // PASO 7: Completar información de envío

  // Rellenamos los campos del formulario usando getByRole
  await page.getByRole('textbox', { name: 'First Name' }).fill('Juan');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Pérez');
  await page.getByRole('textbox', { name: 'Zip/Postal Code' }).fill('C1000');

 // Hacemos clic en el botón "Continue" usando getByRole
 await page.getByRole('button', { name: 'Continue' }).click();

 // Validamos que hayamos avanzado a la página de resumen
 await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');

 // PASO 8: Finalizar la compra (Checkout Overview)

 // Verificamos que el título de la página de resumen sea visible usando el texto exacto
 await expect(page.getByText('Checkout: Overview', { exact: true })).toBeVisible();

 // Hacemos clic en el botón "Finish" usando getByRole
 await page.getByRole('button', { name: 'Finish' }).click();
 
 // PASO 9: Validar éxito de la orden

 // Verificamos que la URL sea la de orden completada
 await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');

 // Verificamos que el título de la página de resumen sea visible usando el texto exacto
 await expect(page.getByText('Checkout: Complete!', { exact: true })).toBeVisible();

 // Verificamos el encabezado de éxito usando getByRole con nivel de heading (h2)
 await expect(page.getByRole('heading', { name: 'Thank you for your order!' })).toBeVisible();

 // PASO 10: Cerrar sesión (Logout)

 // Abrimos el menú lateral de navegación (botón con rol de botón y nombre 'Open Menu')
 await page.getByRole('button', { name: 'Open Menu' }).click();

 // Hacemos clic en el enlace de cierre de sesión usando getByRole
 await page.getByRole('button', { name: 'Logout' }).click();

 // Verificamos que hayamos vuelto a la pantalla de login
 await expect(page).toHaveURL('https://www.saucedemo.com/');
 await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
});