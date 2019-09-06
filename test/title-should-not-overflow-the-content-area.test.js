/*global page */

const { WP_BASE_URL } = require( './support/config' );

describe( 'Post: Long Title', () => {
	beforeAll( async () => {
		await page.goto( `${ WP_BASE_URL }/?name=title-should-not-overflow-the-content-area` );
	} );

	it( 'Should pass Axe tests', async () => {
		await expect( page ).toPassAxeTests();
	} );
} );
