import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';

import 'styles/globals.css';
import { boxing, excon } from '@fonts';

export const metadata: Metadata = {
	title: 'Sneaker Collector',
	description:
		'This tool provides you with the tools to curate, organize, and catalogue your sneakers',
};

const RootLayout = ({ children }: PropsWithChildren) => {
	return (
		<html lang="en" className={`${boxing.variable} ${excon.variable}`}>
			<body className="font-excon">{children}</body>
		</html>
	);
};

export default RootLayout;
