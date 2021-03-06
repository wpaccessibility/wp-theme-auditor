/*global page */

const { WP_BASE_URL } = require( './support/config' );

describe( 'Post: Common Blocks', () => {
	beforeAll( async () => {
		await page.goto( `${ WP_BASE_URL }/?name=block-category-common` );
	} );

	it( 'Should pass Axe tests', async () => {
		await expect( page ).toPassAxeTests();
	} );
} );
