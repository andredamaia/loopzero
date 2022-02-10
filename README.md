# Theme Boilerplate

Theme in development.

## Features

- Modern JavaScript through Webpack
- SCSS support
- PHP routes
- Preload component
- Smooth scroll
- Animation ready

## Requirements

- Node.js >= 14.0.0
- npm / yarn
- MAMP

## Getting Started

```bash
npm install
```

## How to use for local development

Edit `config.php` with the slug of your project:

```php
$pageurl = "../boilerplate";
```

## Developing Locally

To work on the theme locally, open another window/tab in terminal and run:

- `npm run dev` — Compile assets when file changes are made


## Building for Production

To create an optimized production build, run:

- `npm run build` — Compile and optimize the files in your dist directory

This will minify assets, bundle and uglify javascript, and compile scss to css.
It will also add cachebusting names to then ends of the compiled files;

## Theme Structure

```bash
.
boilerplate
├─ components
├─ pages
├─ src
│  ├─ fonts
│  ├─ images
│  ├─ scripts
│  │  ├─ components
│  ├─ styles
│  │  ├─ components
│  │  ├─ pages
│  │  ├─ utils
│  │  └─ styles.scss
│  └─ index.js
├─ .gitingnore
├─ .htaccess
├─ config.php
├─ index.php
├─ package-lock.json
├─ package.json
├─ README.md
├─ robots.txt
├─ site.webmanifest
├─ webpack.config.dev.js
├─ webpack.config.js
└─ webpack.config.prod.js
```

## Todo

- [] Fix fonts
- [] Script page splitting

## Credits

- Murillo Silva
- André da Maia
