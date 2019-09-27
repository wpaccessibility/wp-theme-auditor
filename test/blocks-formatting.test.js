/*global page */

const { WP_BASE_URL } = require( './support/config' );

describe( 'Post: Formatting Blocks', () => {
	beforeAll( async () => {
		await page.goto( `${ WP_BASE_URL }/?name=blocks-formatting` );
	} );

	it( 'Should pass Axe tests', async () => {
		await expect( page ).toPassAxeTests();
	} );
} );
