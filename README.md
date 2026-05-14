# KKIF-dagen

React + Tailwind CSS v4 web app for KKIF-dagen.

## Features

- Start page with general event information
- Rules page
- Spelschema page for 2026
- Route support for specific group and team views
  - `/spelschema/2026/grupp/A`
  - `/spelschema/2026/lag/P14-1`
- Data model prepared for adding 2027 later

## Tech Stack

- React
- React Router
- Tailwind CSS v4
- Vite

## Local Development

```bash
npm install
npm run dev
```

Build production assets:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Schedule Data

Schedule data is in `src/data/schedules.js`.

- 2026 is loaded from CSV content.
- To add 2027 next year, add a `2027` key in `SCHEDULES`.

## GitHub Pages

GitHub Actions workflow is in `.github/workflows/deploy-pages.yml`.

- It installs dependencies, builds the app, and deploys `dist/` to GitHub Pages.
- It also copies `dist/index.html` to `dist/404.html` for SPA direct-route fallback.
