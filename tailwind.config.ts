import { type Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
	content: ['./src/app/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
	theme: {
		container: {
			center: true,
		},
		screens: {
			xs: { max: '430px' },
			sm: '430px',
			md: '768px',
			lg: '992px',
			xl: '1200px',
			'2xl': '1312px',
			'3xl': '1512px',
		},
		colors: {
			black: '#191919',
			white: '#FFFFFF',
			blue: {
				light: '#20A9F3',
				dark: '#061F6A',
			},
			red: '#EF233C',
			gray: {
				400: '#373737',
				300: '#808080',
				200: '#CCCCCC',
				100: '#EEEFF0',
			},
		},
		fontFamily: {
			boxing: ['var(--font-boxing)', ...fontFamily.sans],
			excon: ['var(--font-excon)', ...fontFamily.sans],
		},
		extend: {
			fontSize: {
				'6xl': '4rem', // 64px
			},
			lineHeight: {
				16: '4rem', // 64px
			},
		},
	},
	plugins: [],
};

export default config;
