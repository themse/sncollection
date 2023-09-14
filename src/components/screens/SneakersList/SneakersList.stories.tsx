import type { Meta, StoryObj } from '@storybook/react';

import { SneakersList } from './SneakersList';
import { mockedSneakersForStory } from '@/utils/consts';

const meta = {
	title: 'Screens/SneakersList',
	component: SneakersList,
} satisfies Meta<typeof SneakersList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Template: Story = {
	args: {
		sneakers: mockedSneakersForStory,
	},
	parameters: {
		nextjs: {
			appDirectory: true,
		},
	},
};
