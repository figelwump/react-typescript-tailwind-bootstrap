This bootstraps a react application with typescript and tailwind css. Includes webpack configs, with support for templating the entry index.html file, copying over static and asset files and other basics. Sensible defaults for dev/prod development. Prepopulated .gitignore file.

## To use:

-   Remove anything you're sure you don't need from `package.json`
-   Update metadata in `package.json` and `src/template.html` (description, title, etc)
-   Change the name of the output bundle you want webpack to generate, from "main" to whatever in `webpack.common.js`
-   Run `npm install` (or `yarn` equivalent)
-   Run `npm run watch` to build for dev, and run in watch mode to watch for file changes (will watch for changes to static files too and copy those over). Output dir is `dist-dev` by default, can change in `webpack.dev.js`
-   If you need to test locally in the browser, you can use something like `live-server` (https://www.npmjs.com/package/live-server) to run a local webserver. In this case, `live-server dist-dev`

## Production:

-   Run `npm run build`. Output dir is `dist-prod` by default, can change in `webpack.prod.js`
-   Optimizes tailwind CSS using purge CSS

## If you need to add another react target:

-   Edit webpack.common.js: add entry point, and add HtmlWebpackPlugin entry for that entry point
