/*global describe, beforeAll, page, it, expect */

const { WP_BASE_URL } = require( './support/config' );

describe( 'Post: Paginated', () => {
	beforeAll( async () => {
		await page.goto( `${ WP_BASE_URL }/?name=template-paginated` );
	} );

	it( 'Should pass Axe tests', async () => {
		await expect( page ).toPassAxeTests();
	} );
} );
