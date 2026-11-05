#  Proyecto E2E Automation - SauceDemo con Playwright & TypeScript

##  Descripción del Proyecto

Este repositorio contiene un framework de automatización de pruebas para la plataforma de e-commerce [SauceDemo](https://www.saucedemo.com/), diseñado bajo el patrón **Page Object Model (POM)** en **Playwright** con **TypeScript**.

El proyecto implementa una estrategia de prueba híbrida que abarca tanto **pruebas atómicas e independientes** para la validación rápida y aislada de componentes, como una **suite End-to-End (E2E)** para verificar el flujo crítico completo de compra.

---

##  Tecnologías y Arquitectura

* **Framework:** Playwright
* **Lenguaje:** TypeScript (Tipado estricto)
* **Patrón de Diseño:** Page Object Model (POM)
* **Localización:** `getByRole` y criterios de accesibilidad

---

##  Estructura del Proyecto

```text
├── pages/                                   # Clases Page Object Model (POM)
│   ├── LoginPage.ts                         # Localizadores y acciones de Autenticación
│   ├── InventoryPage.ts                     # Localizadores y acciones del Catálogo
│   ├── CartPage.ts                          # Localizadores y acciones del Carrito
│   └── CheckoutPage.ts                      # Localizadores y acciones del Proceso de Pago
├── tests/                                   # Suites de Pruebas
│   ├── LoginSaucedemo.spec.ts               # Pruebas atómicas de Autenticación
│   ├── CartSaucedemo.spec.ts                # Pruebas atómicas de manipulación del Carrito
│   ├── Cart-ItemsSaucedemo.spec.ts          # Pruebas atómicas de ítems específicos en Carrito
│   ├── CheckoutSaucedemo.spec.ts            # Pruebas atómicas de navegación hacia el Checkout
│   ├── Complete-ShippingSaucedemo.spec.ts   # Pruebas atómicas de datos de envío y confirmación
│   ├── SortSaucedemo.spec.ts                # Pruebas atómicas de ordenamiento de productos
│   └── E2E-SauceDemo.spec.ts                # Flujo completo E2E de compra
├── playwright.config.ts                     # Configuración global de Playwright
├── package.json                             # Dependencias y scripts del proyecto
└── README.md                                # Documentación del proyecto
```

## Instalación y Configuración

Sigue estos pasos para clonar y ejecutar el proyecto en tu máquina local

```
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
```

## Ejecución de Pruebas

```
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
```

## Características del Projecto

* **Arquitectura Page Object Model (POM):** Separación clara entre la lógica de interfaz/interacción (`pages/`) y la lógica de pruebas (`tests/`).

* **Suite de Pruebas Atómicas:** Casos de prueba modulares e independientes (`Login`, `Cart`, `Checkout`, `Shipping`, `Sort`) diseñados para aislar fallos de forma rápida y permitir ejecuciones en paralelo eficaces.

* **Flujo Crítico End-to-End (E2E):** Prueba integral de punta a punta (`E2E-SauceDemo.spec.ts`) que simula la experiencia real de un usuario realizando una compra completa.

* **Assertions Robustos y Locators Resilientes:** Uso prioritario de locators orientados a accesibilidad (`getByRole`, `getByTestId`) y validaciones explícitas de estado.

**Contacto:**
Email: manuelalejandromejiasaular@gmail.com
