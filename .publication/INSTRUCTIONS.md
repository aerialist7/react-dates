0. First of all you need to make a real changes in `src` folder.
1. Then download original `react-dates` package (or latest `@aerialist/react-dates` package) and extract into `react-dates/.publication/package` folder.
2. Make your changes in `src` and then `npm run build:cjs && npm run build:esm` 
3. Copy your changes into `.publication/package` folder (`esm`, `lib`, `src`).
4. Before packing and publishing do not forget to check the version in `package.json` and `CHANGELOG.md` files and copy them as well.
5. Make a npm-package via `npm pack` command (from `react-dates/.publication/package` directory).
6. Publish a package to NPM via `npm login` + `npm publish` (from `react-dates/.publication/package` directory).
