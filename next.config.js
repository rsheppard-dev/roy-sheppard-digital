module.exports = {
	reactStrictMode: true,
	images: {
		domains: ['res.cloudinary.com', 'images.prismic.io'],
	},

	async redirects() {
		return [
			{
				source: '/web-design',
				destination: '/web-design-watford',
				permanent: true,
			},
			{
				source: '/web-development',
				destination: '/web-development-watford',
				permanent: true,
			},
			{
				source: '/ecommerce',
				destination: '/ecommerce-watford',
				permanent: true,
			},
		];
	},
};
