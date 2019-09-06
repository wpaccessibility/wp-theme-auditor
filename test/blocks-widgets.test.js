/*global page */

const { WP_BASE_URL } = require( './support/config' );

describe( 'Post: Widget Blocks', () => {
	beforeAll( async () => {
		await page.goto( `${ WP_BASE_URL }/?name=blocks-widgets` );
	} );

	it( 'Should pass Axe tests', async () => {
		await expect( page ).toPassAxeTests();
	} );
} );
