/*global describe, beforeAll, page, it, expect */

const { WP_BASE_URL } = require( './support/config' );

describe( 'Post: Nested and Mixed Lists', () => {
	beforeAll( async () => {
		await page.goto( `${ WP_BASE_URL }/?name=edge-case-nested-and-mixed-lists` );
	} );

	it( 'Should pass Axe tests', async () => {
		await expect( page ).toPassAxeTests();
	} );
} );
