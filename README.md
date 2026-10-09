# WDD 331R Portfolio

**Student:** Angelique Legaspi

**Semester:** Fall 2026

**Live Site:** [View Site](https://angelique213.github.io/wdd331-portfolio/)

## About

This repository is my portfolio for WDD 331R: Advanced CSS.

Each week I add new pages and styles as I work through the course assignments. The site deploys automatically to GitHub Pages on every push to main.

## Pages

- [Home](index.html)
- [Custom Properties and Nesting](unit-1/custom-properties/index.html)
- [Layered Components](unit-2/layered-components/index.html)

## CSS Architecture

This portfolio uses CSS Cascade Layers to organize styles into five layers:

- `tokens` - Contains colors, spacing, typography, and other CSS variables.
- `base` - Contains the CSS reset and basic HTML element styles.
- `layout` - Contains the page layout and responsive grid.
- `components` - Contains reusable styles such as assignment cards.
- `utilities` - Contains utility styles.

The main stylesheet is `css/main.css`, which imports the CSS files into their assigned layers.

## Build Tool

I chose Lightning CSS as my build tool because it can bundle and minify CSS files.

To install the project dependencies, run:

npm install

To build the CSS, run:

npm run build

The build command combines the CSS files from `css/main.css` and generates a minified stylesheet at `dist/styles.css`.

The source CSS files are kept in the `css` folder so they are easier to organize and maintain.