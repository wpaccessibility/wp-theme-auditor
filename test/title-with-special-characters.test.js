/*global describe, beforeAll, page, it, expect */

const { WP_BASE_URL } = require( './support/config' );

describe( 'Post: Title With Special Characters', () => {
	beforeAll( async () => {
		await page.goto( `${ WP_BASE_URL }/?name=title-with-special-characters` );
	} );

	it( 'Should pass Axe tests', async () => {
		await expect( page ).toPassAxeTests();
	} );
} );
