import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./src/app/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
	theme: {
		extend: {
			container: {
				center: true,
			},
		},
	},
	plugins: [],
};

export default config;
