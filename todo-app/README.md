# Todo App

A modern Todo application built with Vue 3, Vite, and Tailwind CSS.

## Overview

This project is a playground for exploring Vue 3 features, including the Composition API, Pinia for state management, and Vue Router for navigation. It uses Tailwind CSS for styling and Flowbite for UI components.

### Tech Stack

- **Framework:** [Vue 3](https://vuejs.org/)
- **Build Tool:** [Vite](https://vite.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) & [Flowbite](https://flowbite-vue.com/)
- **State Management:** [Pinia](https://pinia.vuejs.org/)
- **Routing:** [Vue Router](https://router.vuejs.org/)
- **Testing:** [Vitest](https://vitest.dev/) (Unit) & [Playwright](https://playwright.dev/) (E2E)
- **Linting & Formatting:** [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/)

## Requirements

- **Node.js:** `^20.19.0` or `>=22.12.0`
- **Package Manager:** `npm` (v10+ recommended)

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Preview Production Build Locally

```sh
npm run preview
```

## Scripts

- `npm run dev`: Starts the Vite development server.
- `npm run build`: Runs type-checking and builds the application for production.
- `npm run preview`: Locally previews the production build.
- `npm run test:unit`: Runs unit tests with Vitest.
- `npm run test:e2e`: Runs end-to-end tests with Playwright.
- `npm run type-check`: Runs `vue-tsc` to check types across the project.
- `npm run lint`: Lints and fixes code using ESLint.
- `npm run format`: Formats code using Prettier.

## Environment Variables

The project uses standard Vite environment variables. Currently, no custom environment variables are required for basic operation.

- `BASE_URL`: (Internal) Used by Vue Router for base path configuration.
- `CI`: Used in Playwright configuration to adjust behavior for Continuous Integration environments.

## Testing

### Unit Tests

Unit tests are located in `src/__tests__` and use Vitest.

```sh
npm run test:unit
```

### End-to-End Tests

E2E tests are located in the `e2e` directory and use Playwright.

```sh
# Install browsers for the first run
npx playwright install

# Run the tests
npm run test:e2e
```

## Project Structure

```text
todo-app/
├── e2e/                # End-to-end tests (Playwright)
├── public/             # Static assets
├── src/
│   ├── __tests__/      # Unit tests (Vitest)
│   ├── components/     # Reusable Vue components
│   ├── router/         # Vue Router configuration
│   ├── stores/         # Pinia state stores
│   ├── styles/         # Global styles and Tailwind CSS imports
│   ├── App.vue         # Root component
│   └── main.ts         # Application entry point
├── index.html          # HTML entry point
├── package.json        # Project dependencies and scripts
├── tsconfig.json       # TypeScript configuration
└── vite.config.ts      # Vite configuration
```

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## License

TODO: Specify license (e.g., MIT, Apache 2.0).
