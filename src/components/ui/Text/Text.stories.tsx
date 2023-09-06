import type { Meta, StoryObj } from '@storybook/react';

import { Text } from './Text';

const meta = {
	title: 'UI/Text',
	component: Text,
	tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		variant: 'primary',
		children: 'Primary',
	},
};

export const Secondary: Story = {
	args: {
		variant: 'secondary',
		children: 'Secondary',
	},
};
