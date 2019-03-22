/*global describe, beforeAll, page, it, expect */

const { WP_BASE_URL } = require( './support/config' );

describe( 'Page: Clearing Floats', () => {
	beforeAll( async () => {
		await page.goto( `${ WP_BASE_URL }/?name=clearing-floats` );
	} );

	it( 'Should pass Axe tests', async () => {
		await expect( page ).toPassAxeTests();
	} );
} );
