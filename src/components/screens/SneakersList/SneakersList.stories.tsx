import type { Meta, StoryObj } from '@storybook/react';

import { SneakersList } from './SneakersList';

const meta = {
	title: 'Screens/SneakersList',
	component: SneakersList,
} satisfies Meta<typeof SneakersList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Template: Story = {};
