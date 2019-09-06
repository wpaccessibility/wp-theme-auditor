/*global page */

const { WP_BASE_URL } = require( './support/config' );

describe( 'Page: Comments', () => {
	beforeAll( async () => {
		await page.goto( `${ WP_BASE_URL }/?name=page-with-comments` );
	} );

	it( 'Should pass Axe tests', async () => {
		await expect( page ).toPassAxeTests();
	} );
} );
