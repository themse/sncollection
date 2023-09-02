import localFont from 'next/font/local';

const boxing = localFont({
	src: './fonts/Boxing-Regular.ttf',
	variable: '--font-boxing',
	display: 'swap',
});

const excon = localFont({
	src: [
		{
			path: './fonts/Excon-Regular.ttf',
			weight: '400',
		},
		{
			path: './fonts/Excon-Medium.ttf',
			weight: '600',
		},
		{
			path: './fonts/Excon-Bold.ttf',
			weight: '700',
		},
	],
	variable: '--font-excon',
	display: 'swap',
});

export { boxing, excon };
