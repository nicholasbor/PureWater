module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				Roboto: ['Roboto'],
				Bebas: ['Bebas Neue'],
			},
		},
		container: {
			center: true,
			padding: '1rem',
			screens: {
				lg: '1124px',
				xl: '1124px',
				'2xl': '1124px',
			},
		},
		fontSize: {
			'h1-large': '72px',
			'text-small': '18px',
			'text-medium': '24px',
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
