/*global describe, beforeAll, page, it, expect */

const { WP_BASE_URL } = require( './support/config' );

describe( 'Post: Pingbacks and Trackbacks', () => {
	beforeAll( async () => {
		await page.goto( `${ WP_BASE_URL }/?name=template-pingbacks-an-trackbacks` );
	} );

	it( 'Should pass Axe tests', async () => {
		await expect( page ).toPassAxeTests();
	} );
} );
