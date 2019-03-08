# WP Theme Auditor

Accessibility auditing tools for WordPress themes.

You can install this package to run [Axe](https://deque.com/axe) tests against your theme for automated accessibility feedback.

## Requirements

- [npm](https://github.com/npm/cli/releases/latest) >= 6.8.0
- A local WordPress install (>= 5.0)
- A theme to test

## Installation

1. From your theme's root directory, run `npm install --save-dev greatislander/wp-theme-auditor` to install the `@wordpress/scripts` package and other related dependencies (if your theme does not already include a `package.json` file, one will be created).
3. Copy the following files into your theme's root directory:

    + `node_modules/@greatislander/wp-theme-auditor/babel.config.js`
    + `node_modules/@greatislander/wp-theme-auditor/jest.config.js`
    + `node_modules/@greatislander/wp-theme-auditor/test`
    
2. Add more test cases. `test/post.test.js` is included as an example. See `jest.config.js` for valid naming patterns and locations for test cases.

## Usage

```
$ npm run test:axe
```

Tests will be run against [http://one.wordpress.test](https://varyingvagrantvagrants.org/docs/en-US/references/default-sites/) by default. If you'd like to run your tests against a different WordPress install, you can use the `WP_BASE_URL` environment variable:

```
$ WP_BASE_URL=https://custom.test npm run test:axe
```

## Contributors

- [@aduth](https://github.com/aduth)
- [@dylanb](https://github.com/dylanb)
- [@greatislander](https://github.com/greatislander)
- [@gziolo](https://github.com/gziolo)
- [@joemcgill](https://github.com/joemcgill)
- [@ryelle](https://github.com/ryelle)
- [@stephenmathieson](https://github.com/stephenmathieson)