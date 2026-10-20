 import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;

    // Locators de accesibilidad unificados para los campos de inicio de sesión
    this.usernameInput = page.getByRole('textbox', { name: 'Username' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.loginButton = page.getByRole('button', { name: 'Login' });
  }

  // Navegamos directamente a la URL de inicio de SauceDemo
  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  // Realizamos el flujo completo de inicio de sesión ingresando usuario y contraseña
  async login(user: string, pass: string) {
    await this.usernameInput.fill(user);
    await this.passwordInput.fill(pass);
    await this.loginButton.click();
  }
}
  
