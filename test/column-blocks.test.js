/*global page */

const { WP_BASE_URL } = require( './support/config' );

describe( 'Post: Columns Block', () => {
	beforeAll( async () => {
		await page.goto( `${ WP_BASE_URL }/?name=column-blocks` );
	} );

	it( 'Should pass Axe tests', async () => {
		await expect( page ).toPassAxeTests();
	} );
} );
