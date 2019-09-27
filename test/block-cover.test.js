/*global page */

const { WP_BASE_URL } = require( './support/config' );

describe( 'Post: Cover Block', () => {
	beforeAll( async () => {
		await page.goto( `${ WP_BASE_URL }/?name=block-cover` );
	} );

	it( 'Should pass Axe tests', async () => {
		await expect( page ).toPassAxeTests();
	} );
} );
