# WP Theme Auditor

Accessibility auditing tools for WordPress themes.

You can install this package to run [Axe](https://deque.com/axe) tests against your theme for automated accessibility feedback.

## Requirements

- [npm](https://github.com/npm/cli/releases/latest) >= 6.8.0
- A local WordPress install (>= 5.0)
- A theme to test

## Installation

From your theme's root directory, run the following commands:

```bash
npm install --save-dev wpaccessibility/wp-theme-auditor
npx npm-add-script -k "create-test-cases" -v "create-test-cases"
npx npm-add-script -k "test:axe" -v "wp-scripts test-e2e"
cp node_modules/@wpaccessibility/wp-theme-auditor/babel.config.js ./
cp node_modules/@wpaccessibility/wp-theme-auditor/jest.config.js ./
cp -r node_modules/@wpaccessibility/wp-theme-auditor/test ./
```

Then you'll need to add more test cases. You can do this interactively by running `npm run create-test-case` from your theme's root directory.

If, say, you wanted to test your theme's contact page, you might create a new test case called `contact.test.js` with modified content from `post.test.js` as follows:

```diff
/*global describe, beforeAll, page, it, expect */

const { WP_BASE_URL } = require( './support/config' );

--describe( 'Single post', () => {
++describe( 'Contact page', () => {
	beforeAll( async () => {
--		await page.goto( `${ WP_BASE_URL }/?p=1` );
++		await page.goto( `${ WP_BASE_URL }/contact/` );
	} );

	it( 'Should pass Axe tests', async () => {
		await expect( page ).toPassAxeTests();
	} );
} );
```

## Usage

```bash
npm run test:axe
```

Tests will be run against [http://one.wordpress.test](https://varyingvagrantvagrants.org/docs/en-US/references/default-sites/) by default. If you'd like to run your tests against a different WordPress install, you can use the `WP_BASE_URL` environment variable:

```bash
WP_BASE_URL=https://custom.test npm run test:axe
```

## Contributors

- [@aduth](https://github.com/aduth)
- [@dylanb](https://github.com/dylanb)
- [@greatislander](https://github.com/greatislander)
- [@gziolo](https://github.com/gziolo)
- [@joemcgill](https://github.com/joemcgill)
- [@ryelle](https://github.com/ryelle)
- [@stephenmathieson](https://github.com/stephenmathieson)