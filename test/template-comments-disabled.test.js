/*global describe, beforeAll, page, it, expect */

const { WP_BASE_URL } = require( './support/config' );

describe( 'Post: Comments Disabled', () => {
	beforeAll( async () => {
		await page.goto( `${ WP_BASE_URL }/?name=template-comments-disabled` );
	} );

	it( 'Should pass Axe tests', async () => {
		await expect( page ).toPassAxeTests();
	} );
} );
