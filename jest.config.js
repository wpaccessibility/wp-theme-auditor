const jestE2EConfig = {
	preset: 'jest-puppeteer',
	setupFilesAfterEnv: [
		'@wordpress/jest-puppeteer-axe',
	],
	testMatch: [
		'<rootDir>/test/*.js',
	],
};

module.exports = jestE2EConfig;
