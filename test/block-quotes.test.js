/*global page */

const { WP_BASE_URL } = require( './support/config' );

describe( 'Post: Quote Block', () => {
	beforeAll( async () => {
		await page.goto( `${ WP_BASE_URL }/?name=block-quotes` );
	} );

	it( 'Should pass Axe tests', async () => {
		await expect( page ).toPassAxeTests();
	} );
} );
