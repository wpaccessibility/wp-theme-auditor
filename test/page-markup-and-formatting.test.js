/*global page */

const { WP_BASE_URL } = require( './support/config' );

describe( 'Page: Markup and Formatting', () => {
	beforeAll( async () => {
		await page.goto( `${ WP_BASE_URL }/?name=page-markup-and-formatting` );
	} );

	it( 'Should pass Axe tests', async () => {
		await expect( page ).toPassAxeTests();
	} );
} );
