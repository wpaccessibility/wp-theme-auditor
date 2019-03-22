/*global describe, beforeAll, page, it, expect */

const { WP_BASE_URL } = require( './support/config' );

describe( 'Post: More Tag', () => {
	beforeAll( async () => {
		await page.goto( `${ WP_BASE_URL }/?name=template-more-tag` );
	} );

	it( 'Should pass Axe tests', async () => {
		await expect( page ).toPassAxeTests();
	} );
} );
