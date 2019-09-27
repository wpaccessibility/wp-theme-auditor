/*global page */

const { WP_BASE_URL } = require( './support/config' );

describe( 'Post: Text Alignment', () => {
	beforeAll( async () => {
		await page.goto( `${ WP_BASE_URL }/?name=markup-text-alignment` );
	} );

	it( 'Should pass Axe tests', async () => {
		await expect( page ).toPassAxeTests();
	} );
} );
