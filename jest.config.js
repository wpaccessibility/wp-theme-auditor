const jestE2EConfig = {
	preset: 'jest-puppeteer',
	setupFilesAfterEnv: [
		'@wordpress/jest-puppeteer-axe',
	],
	reporters: [
		'default',
		[
			'./node_modules/jest-html-reporter', {
				includeFailureMsg: true,
				pageTitle: 'WP Theme Auditor Report',
				outputPath: 'test/report.html',
			},
		],
	],
	testMatch: [
		'**/test/*.test.js',
	],
};

module.exports = jestE2EConfig;
