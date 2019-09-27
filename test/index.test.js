/*global page */

const { WP_BASE_URL } = require( './support/config' );

describe( 'Page: Index', () => {
	beforeAll( async () => {
		await page.goto( `${ WP_BASE_URL }/` );
	} );

	it( 'Should pass Axe tests', async () => {
		await expect( page ).toPassAxeTests();
	} );
} );
