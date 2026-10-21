#  Proyecto E2E Automation - SauceDemo con Playwright & TypeScript

##  Descripción del Proyecto

Este repositorio contiene una suite de pruebas automatizadas End-to-End (E2E) para validar el flujo principal de compra en la plataforma e-commerce **SauceDemo**. 

El proyecto aplica el patrón de diseño **Page Object Model (POM)** y utiliza **TypeScript** con **Playwright** para garantizar un código modular, legible y fácil de mantener.

---

##  Tecnologías y Arquitectura

* **Framework:** Playwright
* **Lenguaje:** TypeScript (Tipado estricto)
* **Patrón de Diseño:** Page Object Model (POM)
* **Localización:** `getByRole` y criterios de accesibilidad

---

##  Estructura del Proyecto

```text
├── pages/
│   ├── CatalogPage.ts      # Selectores y acciones de la vista de productos
│   ├── CheckoutPage.ts     # Selectores y lógica del carrito y proceso de compra
│   └── LoginPage.ts        # Selectores y métodos de inicio de sesión
├── tests/
│   └── Flujo-completo-de-compra-en-SauceDemo.spec.ts  # Test del flujo completo de compra
├── .gitignore               # Exclusión de archivos
├── playwright.config.ts    # Archivo de configuración general
└── package.json            # Dependencias del proyecto

Instalación y Configuración
Sigue estos pasos para clonar y ejecutar el proyecto en tu máquina local:

1. Clonar el repositorio
Bash
git clone [https://github.com/ManuelMejias22/Proyecto-Saucedemo-Playwright.git](https://github.com/ManuelMejias22/Proyecto-Saucedemo-Playwright.git)
cd Proyecto-Saucedemo-Playwright
2. Instalar dependencias
Bash
npm install
3. Instalar los navegadores de Playwright
Bash
npx playwright install

Ejecución de Pruebas

Puedes correr las pruebas de diferentes maneras según tus necesidades

Ejecutar en modo headless (por defecto):

Bash
npx playwright test

Ejecutar con interfaz gráfica (UI Mode - recomendado para depurar):

Bash
npx playwright test --ui

Ejecutar en un navegador específico (ej. Chrome):

Bash
npx playwright test --project=chromium

Ver el reporte HTML de la última ejecución:

Bash
npx playwright show-report

Características Clave del Proyecto
Selectores Resilientes: Uso prioritario de getByRole y accesibilidad para evitar fallos por cambios en el DOM.

Mantenibilidad: Separación clara entre la lógica de las páginas (POM) y los escenarios de prueba.

Auditoría Visual: Configuración de tiempos de ejecución legibles para facilitar el seguimiento visual de la automatización.

Contacto
Email: manuelalejandromejiasaular@gmail.com
