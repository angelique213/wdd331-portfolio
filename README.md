
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
- [Unit 3 - Visual Effects](unit-3/visual-effects/index.html)
- [Unit 4 - Editorial Grid Layout](unit-4/grid-layouts/editorial.html)
- [Unit 4 - Card Grid with Subgrid](unit-4/grid-layouts/cards.html)
- [Unit 4 - Container Queries](unit-4/advanced/container-demo.html)
- [Unit 4 - Sticky Positioning](unit-4/advanced/sticky-demo.html)
- Unit 5 - Typography Tokens and Web Fonts (Portfolio Update)
- [Resume](resume.html)
- [Contact Form](contact.html)

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
│   ├── contact.css
│   ├── effects.css
│   ├── resume.css
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
- `color-mix()` to create accent hover colors.
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

## Typography System

For Unit 5, I updated my portfolio typography using a modular scale with a ratio of 1.25. Instead of using different font sizes throughout my CSS, I created reusable typography tokens in `css/tokens/variables.css`.

I used `clamp()` for larger headings so the text can adjust based on the screen size. I also added semantic tokens for headings, body text, labels, and buttons to keep the typography consistent.

For the fonts, I chose Playfair Display for headings and Inter for body text. I wanted the headings to stand out while keeping the paragraphs easy to read. Both fonts are loaded from Google Fonts using `display=swap`.

The design is still similar to my original portfolio, but now it is easier to maintain. If I want to change a font size, I can update the token instead of changing several CSS files.

## Resume and Contact Pages

I added a resume page and contact form to my WDD 331R portfolio. Both pages use my existing typography, colors, and spacing tokens.

### Resume

The resume page is located in `resume.html`, and its styles are in `css/components/resume.css`.

- Created a resume using semantic HTML.
- Included my education, experience, projects, and technical skills.
- Added GitHub and LinkedIn links.
- Used my existing typography and color tokens.
- Added a print stylesheet using `@media print`.
- Hid navigation and buttons when printing.
- Displayed GitHub and LinkedIn URLs in the printed version.
- Used `break-inside: avoid` to prevent experience entries from splitting between pages.
- Added `orphans` and `widows` to improve printed text layout.
- Adjusted font sizes and spacing to make the resume fit on one page.

### Contact Form

The contact page is located in `contact.html`, and its styles are in `css/components/contact.css`.

- Added name, email, and message fields.
- Connected visible labels to each input using matching `for` and `id` attributes.
- Added a checkbox for receiving updates.
- Used `accent-color` to apply my portfolio's accent color to the checkbox.
- Added `field-sizing: content` to allow the message textarea to grow as the user types.
- Added minimum and maximum heights for the textarea.
- Styled the form using my existing design tokens.
- The form is a demo and does not send messages.

### CSS Token Audit

I reviewed `css/tokens/variables.css` and `css/tokens/colors.css` to find unused and duplicate CSS tokens.

My audit results:

- Started with 87 CSS tokens.
- Identified 28 tokens without CSS `var()` references.
- Checked the source files for additional references.
- Removed the 28 unused tokens and one dependent token.
- Found 10 groups of tokens with identical values.
- Kept tokens with different purposes, such as spacing and border radius, even when their values matched.

This cleanup helped reduce unnecessary variables and made my token files easier to read and maintain.

## Testing

I tested the resume and contact pages in my local development environment.

For the resume, I used Chrome's print preview to check the layout. I adjusted the print styles so the resume fits on one page and displays the GitHub and LinkedIn URLs.

For the contact form, I checked the layout, input fields, labels, checkbox, and textarea styling.

The resume and contact pages are linked from my portfolio homepage.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- CSS Custom Properties
- CSS Cascade Layers
- CSS Grid
- Subgrid
- Container Queries
- Responsive Typography
- CSS Print Stylesheets
- Lightning CSS
- Git and GitHub
