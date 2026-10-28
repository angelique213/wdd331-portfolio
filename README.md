# WDD 331R Portfolio

**Student:** Angelique Legaspi  
**Semester:** Fall 2026  
**Live Site:** [View Site](https://angelique213.github.io/wdd331-portfolio/)

## About

This repository is my portfolio for WDD 331R: Advanced CSS. Each week, I add new pages and styles as I work through the course assignments.


## Pages

- [Portfolio Home](https://angelique213.github.io/wdd331-portfolio/)
- [Unit 1 - Custom Properties and Nesting](unit-1/custom-properties/index.html)
- [Unit 2 - Layered Components](unit-2/layered-components/index.html)
- [Unit 4 - Editorial Grid Layout](unit-4/grid-layouts/editorial.html)
- [Unit 4 - Responsive Card Grid](unit-4/grid-layouts/cards.html)


## CSS Architecture

The shared CSS is organized into five layers to make the styles easier to manage as the portfolio grows.

```text
css/
├── tokens/
│   ├── colors.css
│   └── variables.css
├── base/
│   ├── reset.css
│   └── elements.css
├── layout/
│   └── layout.css
├── components/
│   ├── cards.css
│   └── theme-toggle.css
├── utilities/
│   └── utilities.css
└── main.css

js/
└── theme-preference.js
```

The layer order in `css/main.css` is:

```text
tokens → base → layout → components → utilities
```

The main stylesheet imports the CSS files into their assigned layers.

## Color System and Dark Mode

My portfolio supports light mode, dark mode, and a system default option. Visitors can select their preferred theme using the theme toggle.

JavaScript saves the selected theme in `localStorage`, so the preference stays after refreshing the page.

The color system uses:

- `oklch()` to define the accent color.
- `color-mix()` to generate lighter and darker accent colors.
- `light-dark()` to define colors for light and dark modes.
- CSS custom properties to keep the colors consistent.

The color tokens are located in `css/tokens/colors.css`, while spacing, typography, and other design tokens are in `css/tokens/variables.css`.

The theme toggle styles are in `css/components/theme-toggle.css`, and the JavaScript is in `js/theme-preference.js`.

## Build Tool

I chose **Lightning CSS** as my build tool because it can bundle and minify CSS files.

It combines the CSS files from `css/main.css` and creates a minified stylesheet at:

```text
dist/styles.css
```

The live site still uses `css/main.css`. The bundled `dist/styles.css` file shows that the CSS was successfully bundled for the Architecture and Build assignment.

## Running the Build

First, install the project dependencies:

```bash
npm install
```

Then build the CSS:

```bash
npm run build
```

This will create or update:

```text
dist/styles.css
```

The original source CSS files remain in the `css/` folder so they are easier to organize and maintain.