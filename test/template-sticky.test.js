/*global page */

const { WP_BASE_URL } = require( './support/config' );

describe( 'Post: Sticky', () => {
	beforeAll( async () => {
		await page.goto( `${ WP_BASE_URL }/?name=template-sticky` );
	} );

	it( 'Should pass Axe tests', async () => {
		await expect( page ).toPassAxeTests();
	} );
} );
