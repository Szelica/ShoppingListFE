# 🛒 ShoppingListFE

## Getting Started with ShoppingListFE

This project was built with [Create React App](https://github.com/facebook/create-react-app) and extended with custom components, state management, and mock backend functionality for shopping list management.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time.\
This command will remove the single build dependency from your project and copy all configuration files directly into your project.

## Features

- Simulated user via local mock data
- Create and manage shopping lists
- Add, edit, and delete items
- Share lists with invited users
- Invited users can leave lists
- Archive lists
- Light/Dark mode toggle
- Language switcher (EN / SK / HU / CZ)
- Uses mock backend (.json files)

## Project Structure

src/
├── components/ # Reusable UI components (Button, Modal, Footer...)
├── pages/ # Page components (Dashboard, Profile, ShoppinglistDetail...)
├── context/ # UserContext and global state
├── hooks/ # Custom React hooks
├── mockdata/ # JSON files simulating backend data
├── middleware/ # Mock API calls (e.g., calls.js)
├── theme.css # Custom colors and themes
├── typography.css # Fonts and text styles
└── App.js # Entry point with routing




# 🛒 ShoppingListFE Slovenska verzia

## Začíname so ShoppingListFE

Tento projekt je postavený pomocou [Create React App](https://github.com/facebook/create-react-app) a rozšírený o vlastné komponenty, stavovú správu a falošný backend (mock dáta) na správu nákupných zoznamov.

## Dostupné skripty

V koreňovom priečinku projektu môžeš spustiť:

### `npm start`

Spustí aplikáciu v režime vývoja.\
Otvor [http://localhost:3000](http://localhost:3000) vo svojom prehliadači.

Stránka sa automaticky obnoví pri zmene súborov.\
V konzole sa zobrazia aj prípadné chyby (lint).

### `npm test`

Spustí testy v interaktívnom režime.

### `npm run build`

Vytvorí optimalizovanú verziu aplikácie v priečinku `build`.\
Kód bude minifikovaný a pripravený na nasadenie.

### `npm run eject`

**Pozor: tento krok je nevratný. Po vykonaní `eject` sa nedá vrátiť späť!**

Príkaz odstráni závislosť od prednastavených nástrojov a presunie všetky konfiguračné súbory do projektu.

## ✨ Funkcionalita

- 🔐 Simulovaný prihlásený užívateľ cez lokálne dáta\
- 📝 Vytváranie a správa nákupných zoznamov\
- 🛒 Pridávanie, úprava a mazanie položiek v zoznamoch\
- 👥 Zdieľanie zoznamov s pozvanými používateľmi\
- 🚪 Možnosť, aby pozvaný používateľ opustil zoznam\
- 📦 Archivácia zoznamov\
- 🌙 Prepínač svetlého/tmavého režimu\
- 🌍 Prepínanie jazyka (EN / SK / HU / CZ)\
- 🧪 Používanie falošného backendu cez `.json` súbory

## 📁 Štruktúra projektu

src/
├── components/ # UI komponenty (tlačidlá, modály, footer atď.)
├── pages/ # Stránky aplikácie (Dashboard, Login, Register...)
├── context/ # Správa globálneho stavu (napr. UserContext)
├── hooks/ # Vlastné React hooky
├── mockdata/ # Mock JSON súbory simulujúce backend
├── middleware/ # Volania na mock server (napr. calls.js)
├── theme.css # Paleta farieb a téma
├── typography.css # Typografia a fonty
└── App.js # Vstupný bod aplikácie s routingom