/*global describe, beforeAll, page, it, expect */

const { WP_BASE_URL } = require( './support/config' );

describe( 'Page: Comments Disabled', () => {
	beforeAll( async () => {
		await page.goto( `${ WP_BASE_URL }/?name=page-with-comments-disabled` );
	} );

	it( 'Should pass Axe tests', async () => {
		await expect( page ).toPassAxeTests();
	} );
} );
