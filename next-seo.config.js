export default {
	titleTemplate: '%s || Roy Sheppard Digital',
	defaultTitle: 'Roy Sheppard Digital',
	facebook: {
		appId: '308756374084143',
	},
	openGraph: {
		locale: 'en_IE',
		site_name: 'Roy Sheppard Digital',
	},
	twitter: {
		handle: '@rsheppard_dev',
		site: '@rsheppard_dev',
		cardType: 'summary_large_image',
	},
	additionalLinkTags: [
		{
			rel: 'apple-touch-icon',
			href: '/apple-touch-icon.png',
			sizes: '180x180',
		},
		{
			rel: 'icon',
			type: 'image/png',
			sizes: '32x32',
			href: '/favicon-32x32.png',
		},
		{
			rel: 'icon',
			type: 'image/png',
			sizes: '16x16',
			href: '/favicon-16x16.png',
		},
		{
			rel: 'manifest',
			href: '/site.webmanifest',
		},
		{
			rel: 'mask-icon',
			href: '/safari-pinned-tab.svg',
			color: '#5bbad5',
		},
	],
	additionalMetaTags: [
		{
			name: 'msapplication-TileColor',
			content: '#008f9b',
		},
		{
			name: 'theme-color',
			content: '#ffffff',
		},
	],
};
