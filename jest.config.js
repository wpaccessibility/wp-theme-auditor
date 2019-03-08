const jestE2EConfig = {
	preset: 'jest-puppeteer',
	setupFilesAfterEnv: [
		'@wordpress/jest-puppeteer-axe',
	],
	testMatch: [
		'**/__tests__/**/*.js',
		'**/?(*.)(spec|test).js',
		'**/test/*.js',
	],
};

module.exports = jestE2EConfig;
