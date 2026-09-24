# pizza-menu-app

An interactive React menu application for a pizzeria, displaying artisan recipes, opening schedules, sold-out statuses, and order options.

## Project Overview

`pizza-menu-app` serves as a dynamic restaurant menu interface built with React 18. It presents pizza selections, ingredients, pricing, sold-out states, and real-time operational status (open vs closed hours).

## Features

- **Artisan Pizza Catalog**: Lists pizza items with photo, ingredient lists, and pricing.
- **Dynamic Store Hours**: Checks opening hours dynamically to show whether the kitchen is open.
- **Sold Out State Management**: Conditionally styles and labels pizzas based on stock status.
- **Clean Component Hierarchy**: Divided into Header, Menu, Pizza cards, and Footer components.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 16.x, 18.x, or later)
- [npm](https://www.npmjs.com/) (version 8.x or later)

## Installation/Build

1. Clone the repository and navigate to the project directory:
   ```bash
   git clone https://github.com/AntonioHellin/pizza-menu.git
   cd pizza-menu
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. (Optional) Configure environment variables:
   ```bash
   cp .env.example .env
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Usage

Start the development server:
```bash
npm start
```
The application will launch at `http://localhost:3000`.

To run test suites:
```bash
npm test
```
