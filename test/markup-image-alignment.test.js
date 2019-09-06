/*global page */

const { WP_BASE_URL } = require( './support/config' );

describe( 'Post: Image Alignment', () => {
	beforeAll( async () => {
		await page.goto( `${ WP_BASE_URL }/?name=markup-image-alignment` );
	} );

	it( 'Should pass Axe tests', async () => {
		await expect( page ).toPassAxeTests();
	} );
} );
