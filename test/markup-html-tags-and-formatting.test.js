/*global describe, beforeAll, page, it, expect */

const { WP_BASE_URL } = require( './support/config' );

describe( 'Post: HTML Tags and Formatting', () => {
	beforeAll( async () => {
		await page.goto( `${ WP_BASE_URL }/?name=markup-html-tags-and-formatting` );
	} );

	it( 'Should pass Axe tests', async () => {
		await expect( page ).toPassAxeTests();
	} );
} );
