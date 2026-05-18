1. First you need to make real changes in `src` folder.
2. Then download original `react-dates` package (or latest `@aerialist/react-dates` package) and extract into `react-dates/.publication/package` folder.
3. Make your changes in `src` and then `npm run build:cjs && npm run build:esm` 
4. Copy only files with your changes into `.publication/package` folder (`esm`, `lib`, `src`).
5. Before packing and publishing remember to update the version in `package.json` and `CHANGELOG.md` files and copy them as well.
6. Make a npm-package via `npm pack` command (from `react-dates/.publication/package` directory).
7. Publish a package to NPM via `npm login` + `npm publish` (from `react-dates/.publication/package` directory).
