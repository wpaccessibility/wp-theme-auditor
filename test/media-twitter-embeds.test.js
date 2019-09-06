/*global page */

const { WP_BASE_URL } = require( './support/config' );

describe( 'Post: Twitter Embeds', () => {
	beforeAll( async () => {
		await page.goto( `${ WP_BASE_URL }/?name=media-twitter-embeds` );
	} );

	it( 'Should pass Axe tests', async () => {
		await expect( page ).toPassAxeTests();
	} );
} );
