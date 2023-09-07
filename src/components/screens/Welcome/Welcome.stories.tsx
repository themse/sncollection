import type { Meta, StoryObj } from '@storybook/react';

import { Welcome } from './Welcome';

const meta = {
	title: 'Screens/Welcome',
	component: Welcome,
} satisfies Meta<typeof Welcome>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Template: Story = {};
