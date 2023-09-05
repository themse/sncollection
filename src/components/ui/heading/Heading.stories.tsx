import type { Meta, StoryObj } from '@storybook/react';

import { Heading } from './Heading';

const meta = {
	title: 'UI/Heading',
	component: Heading,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Heading1: Story = {
	args: {
		variant: 'heading-1',
		children: 'Heading1',
	},
};

export const Heading2: Story = {
	args: {
		variant: 'heading-2',
		children: 'Heading2',
	},
};

export const Heading3: Story = {
	args: {
		variant: 'heading-3',
		children: 'Heading3',
	},
};

export const Subheading: Story = {
	args: {
		variant: 'subheading',
		children: 'Subheading',
	},
};
