/*global describe, beforeAll, page, it, expect */

const { WP_BASE_URL } = require( './support/config' );

describe( 'Post: No Content', () => {
	beforeAll( async () => {
		await page.goto( `${ WP_BASE_URL }/?name=edge-case-no-content` );
	} );

	it( 'Should pass Axe tests', async () => {
		await expect( page ).toPassAxeTests();
	} );
} );
