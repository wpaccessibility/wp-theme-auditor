const WP_ADMIN_USER = {
	username: 'admin',
	password: 'password',
};

const {
	WP_USERNAME = WP_ADMIN_USER.username,
	WP_PASSWORD = WP_ADMIN_USER.password,
	WP_BASE_URL = 'http://one.wordpress.test',
} = process.env;

module.exports = {
	WP_ADMIN_USER,
	WP_USERNAME,
	WP_PASSWORD,
	WP_BASE_URL,
};
