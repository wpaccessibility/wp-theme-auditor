/*global page */

const { WP_BASE_URL } = require( './support/config' );

describe( 'Post: Title With Markup', () => {
	beforeAll( async () => {
		await page.goto( `${ WP_BASE_URL }/?name=markup-title-with-markup` );
	} );

	it( 'Should pass Axe tests', async () => {
		await expect( page ).toPassAxeTests();
	} );
} );
