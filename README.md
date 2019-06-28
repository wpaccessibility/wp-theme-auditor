# WP Theme Auditor

Accessibility auditing tools for WordPress themes.

You can install this package to run [Axe](https://deque.com/axe) tests against your theme for automated accessibility feedback.

## Requirements

- [npm](https://github.com/npm/cli/releases/latest) >= 6.8.0
- A local WordPress install (>= 5.0)
- A theme to test

## Installation

If your theme does not contain a [`package.json`](https://docs.npmjs.com/creating-a-package-json-file) file, create one by running the following command from your theme's root directory:

```bash
npm init
```

Run the following commands from your theme's root directory:

```bash
npm install --save-dev wpaccessibility/wp-theme-auditor
node bin/postinstall.js
npx npm-add-script -k "create-test-cases" -v "create-test-cases"
npx npm-add-script -k "test:axe" -v "wp-scripts test-e2e"
```

Then you'll need to add more test cases. You can do this interactively by running `npm run create-test-cases` from your theme's root directory.

If, say, you wanted to test your theme's contact page which has a slug of `contact`, you might create a new test case with the following inputs:

```bash
$ npm run create-test-cases
> twentynineteen@1.3.0 create-test-cases /Users/ned/Sites/a11y/wp-content/themes/twentynineteen
> create-test-cases

Creating test cases...
? What is the post type? page
? What is the slug of the post or page? contact
? What is the title of the post or page? Contact page
Test case created at /Users/ned/Sites/a11y/wp-content/themes/twentysixteen/test/contact.test.js.
```

The resulting test case file would contain the following content:

```javascript
/*global describe, beforeAll, page, it, expect */

const { WP_BASE_URL } = require( './support/config' );

describe( 'Contact page', () => {
	beforeAll( async () => {
		await page.goto( `${ WP_BASE_URL }/?pagename=contact` );
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
