const jestE2EConfig = {
	preset: 'jest-puppeteer',
	setupFilesAfterEnv: [
		'@wordpress/jest-puppeteer-axe',
	],
	testMatch: [
		'**/test/*.test.js',
	],
};

module.exports = jestE2EConfig;
