/*global page */

const { WP_BASE_URL } = require( './support/config' );

describe( 'Post: Many Categories', () => {
	beforeAll( async () => {
		await page.goto( `${ WP_BASE_URL }/?name=edge-case-many-categories` );
	} );

	it( 'Should pass Axe tests', async () => {
		await expect( page ).toPassAxeTests();
	} );
} );
