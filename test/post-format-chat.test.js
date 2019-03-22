/*global describe, beforeAll, page, it, expect */

const { WP_BASE_URL } = require( './support/config' );

describe( 'Post: Chat Format', () => {
	beforeAll( async () => {
		await page.goto( `${ WP_BASE_URL }/?name=post-format-chat` );
	} );

	it( 'Should pass Axe tests', async () => {
		await expect( page ).toPassAxeTests();
	} );
} );
