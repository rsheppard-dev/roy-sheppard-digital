const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./slices/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		screens: {
			xs: '400px',
			...defaultTheme.screens,
		},
		container: {
			center: true,
			padding: '1rem',
		},
		maxWidth: {
			'1/2': '50%',
		},
		extend: {
			colors: {
				primary: {
					100: '#F49730',
					200: '#F15A24',
				},
				secondary: {
					100: '#008F9B',
					200: '#007883',
				},
				accent: {
					100: '#252729',
				},
			},
			fontFamily: {
				lato: ['lato', 'sans-serif'],
				futura: ['futura-pt', 'sans-serif'],
			},
			backgroundImage: {
				bullet: 'url("/images/bullet.svg")',
			},
			spacing: {
				18: '4.1rem',
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/aspect-ratio'),
	],
	safelist: ['pt-32', 'pt-40'],
};
