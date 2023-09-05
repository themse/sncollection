import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta = {
	title: 'UI/Button',
	component: Button,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		isActive: {
			control: 'boolean',
		},
		fullWidth: {
			control: 'boolean',
		},
	},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		children: 'Primary',
		variant: 'primary',
	},
};

export const Secondary: Story = {
	args: {
		children: 'Secondary',
		variant: 'secondary',
	},
};
