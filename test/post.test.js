const { WP_BASE_URL } = require( './support/config' );

describe('Single post', () => {
	beforeAll(async () => {
		await page.goto( `${WP_BASE_URL}/?p=1`)
	});

	it('Should pass Axe tests', async () => {
		await expect(page).toPassAxeTests()
	});
});