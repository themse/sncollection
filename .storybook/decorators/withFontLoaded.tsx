import { type Decorator } from '@storybook/react';

import { boxing, excon } from '@fonts';

export const withFontLoaded: Decorator = (Story) => (
	<div className={`${boxing.variable} ${excon.variable}`}>
		<div className="font-excon text-black">
			<Story />
		</div>
	</div>
);
