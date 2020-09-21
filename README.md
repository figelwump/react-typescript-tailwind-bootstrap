Bootstraps a react application with typescript and Tailwind css. Includes webpack configs with support for most of the basics, sensible defaults for dev/prod development, and prepopulated .gitignore file.

This is left intentionally simple and does not cover every case. It's intended to be an easy-to-understand and easy-to-use starting point for fresh react apps.

## To use:

-   Remove anything you're sure you don't need from `package.json`
-   Update metadata in `package.json` and `src/template.html` (description, title, etc)
-   Change the name of the output bundle you want webpack to generate, from "main" to whatever in `webpack.common.js`
-   Run `npm install` (or `yarn` equivalent)
-   Run `npm run watch` to build for dev, and run in watch mode to watch for file changes (will watch for changes to static files too and copy those over). Output dir is `dist-dev` by default (can be changed in `webpack.dev.js`)
-   If you need to test locally in the browser, you can use something like `live-server` (https://www.npmjs.com/package/live-server) to run a local webserver. In this case, `live-server dist-dev`

### Directory structure:

Pretty self-explanatory, the main directories of interest are: `src`, `src/static`, and `assets`.

Assets and static files are copied over to the build directory by webpack, and updated automatically when they change if you're running `npm run watch`

### If you need to add another react target:

-   Edit `webpack.common.js`: add entry point, and add HtmlWebpackPlugin entry for that entry point

## Production:

-   Run `npm run build`. Output dir is `dist-prod` by default (can be changed in `webpack.prod.js`)
-   Optimizes Tailwind CSS using Purge CSS. To add additional directory paths to be purged, edit `tailwind.config.js`
