import defaultTheme from 'tailwindcss/defaultTheme';

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter var', ...defaultTheme.fontFamily.sans],
			}
		}
	},

	plugins: []
};

export default config;
