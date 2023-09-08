import { type Decorator } from '@storybook/react';

import { CurrentSneakersProvider } from '@/context/CurrentSneakersContext';

export const withCurrentSneakersProvider: Decorator = (Story) => (
	<CurrentSneakersProvider>
		<Story />
	</CurrentSneakersProvider>
);
