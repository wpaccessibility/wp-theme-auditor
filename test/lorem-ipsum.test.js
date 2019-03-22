/*global describe, beforeAll, page, it, expect */

const { WP_BASE_URL } = require( './support/config' );

describe( 'Page: Lorem Ipsum', () => {
	beforeAll( async () => {
		await page.goto( `${ WP_BASE_URL }/?name=lorem-ipsum` );
	} );

	it( 'Should pass Axe tests', async () => {
		await expect( page ).toPassAxeTests();
	} );
} );
