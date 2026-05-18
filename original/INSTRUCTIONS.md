0. First of all you need to make a real changes in `src` folder.
1. Then download original `react-dates` package (or latest `@aerialist/react-dates` package) and extract into "original" folder.
2. Make your changes (do not forget that there are `esm` folder also, not only `lib` folder).
3. Before packing and publishing do not forget to check the version in `package.json` and `CHANGELOG.md` files.
4. Make a npm-package via `npm pack` command (from `react-dates/original/package` directory).
5. Publish a package to NPM via `npm login` + `npm publish` (from `react-dates/original/package` directory).
