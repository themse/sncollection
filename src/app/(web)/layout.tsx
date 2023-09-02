import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';

export const metadata: Metadata = {
	title: 'SN Collector - Home Page',
};

const WebLayout = ({ children }: PropsWithChildren) => {
	return (
		<div className="relative flex min-h-screen min-w-[320px] flex-col justify-between">
			{/* Header */}

			<main className="flex-1">{children}</main>

			{/* Footer */}
		</div>
	);
};

export default WebLayout;
