/*global page */

const { WP_BASE_URL } = require( './support/config' );

describe( 'Post: Horizontal Featured Image', () => {
	beforeAll( async () => {
		await page.goto( `${ WP_BASE_URL }/?name=template-featured-image-horizontal` );
	} );

	it( 'Should pass Axe tests', async () => {
		await expect( page ).toPassAxeTests();
	} );
} );
