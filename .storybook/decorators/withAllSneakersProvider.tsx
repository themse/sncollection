import { type Decorator } from '@storybook/react';

import { AllSneakersProvider } from '@/context/AllSneakersContext';

export const withAllSneakersProvider: Decorator = (Story) => (
	<AllSneakersProvider>
		<Story />
	</AllSneakersProvider>
);
