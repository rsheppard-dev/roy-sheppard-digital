module.exports = {
	siteUrl: process.env.SITE_URL || 'https://wwww.roysheppard.digital',
	generateRobotsTxt: true,
	sitemapSize: 7000,
	exclude: ['/slice-simulator'],
	robotsTxtOptions: {
		policies: [
			{ userAgent: '*', disallow: '/slice-simulator' },
			{ userAgent: '*', allow: '/' },
		],
	},
};
