import { type Decorator } from '@storybook/react';

import { Drawer, DrawerContent, DrawerTitle } from '@/ui/Drawer';

export const withDrawer: Decorator = (Story) => (
	<Drawer>
		<Story />

		<DrawerContent className="space-y-10">
			<DrawerTitle>Drawer Example</DrawerTitle>
		</DrawerContent>
	</Drawer>
);
