/*global page */

const { WP_BASE_URL } = require( './support/config' );

describe( 'Post: Image Block', () => {
	beforeAll( async () => {
		await page.goto( `${ WP_BASE_URL }/?name=block-image` );
	} );

	it( 'Should pass Axe tests', async () => {
		await expect( page ).toPassAxeTests();
	} );
} );
