import { PropsWithChildren } from 'react';

export const Container = ({ children }: PropsWithChildren) => {
	return (
		<div className="px-6 2xl:container 2xl:px-24">
			<div className="3xl:-px-24">{children}</div>
		</div>
	);
};
