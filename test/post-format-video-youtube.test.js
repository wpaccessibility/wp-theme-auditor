/*global page */

const { WP_BASE_URL } = require( './support/config' );

describe( 'Post: YouTube Video Format', () => {
	beforeAll( async () => {
		await page.goto( `${ WP_BASE_URL }/?name=post-format-video-youtube` );
	} );

	it( 'Should pass Axe tests', async () => {
		await expect( page ).toPassAxeTests();
	} );
} );
