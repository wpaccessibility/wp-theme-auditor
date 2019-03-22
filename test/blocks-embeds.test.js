/*global describe, beforeAll, page, it, expect */

const { WP_BASE_URL } = require( './support/config' );

describe( 'Post: Embed Blocks', () => {
	beforeAll( async () => {
		await page.goto( `${ WP_BASE_URL }/?name=blocks-embeds` );
	} );

	it( 'Should pass Axe tests', async () => {
		await expect( page ).toPassAxeTests();
	} );
} );
