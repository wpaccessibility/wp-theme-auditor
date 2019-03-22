/*global describe, beforeAll, page, it, expect */

const { WP_BASE_URL } = require( './support/config' );

describe( 'Post: Password Protected', () => {
	beforeAll( async () => {
		await page.goto( `${ WP_BASE_URL }/?name=template-password-protected` );
	} );

	it( 'Should pass Axe tests', async () => {
		await expect( page ).toPassAxeTests();
	} );
} );
