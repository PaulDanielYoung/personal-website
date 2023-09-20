import defaultTheme from 'tailwindcss/defaultTheme';

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter var', ...defaultTheme.fontFamily.sans]
			},
			scale: {
				101: '1.01',
				115: '1.15'
			},
			lineClamp: {
				8: '8'
			}
		}
	},

	plugins: [require('@tailwindcss/forms')]
};

export default config;
