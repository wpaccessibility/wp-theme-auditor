/*global page */

const { WP_BASE_URL } = require( './support/config' );

describe( 'Post: Defined Excerpt', () => {
	beforeAll( async () => {
		await page.goto( `${ WP_BASE_URL }/?name=template-excerpt-defined` );
	} );

	it( 'Should pass Axe tests', async () => {
		await expect( page ).toPassAxeTests();
	} );
} );
