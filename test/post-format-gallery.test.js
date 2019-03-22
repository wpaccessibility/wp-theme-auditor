/*global describe, beforeAll, page, it, expect */

const { WP_BASE_URL } = require( './support/config' );

describe( 'Post: Gallery Format', () => {
	beforeAll( async () => {
		await page.goto( `${ WP_BASE_URL }/?name=post-format-gallery` );
	} );

	it( 'Should pass Axe tests', async () => {
		await expect( page ).toPassAxeTests();
	} );
} );
