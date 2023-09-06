import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import { Icon } from '@/ui/Icon';

const meta = {
	title: 'UI/Button',
	component: Button,
	tags: ['autodocs'],
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

export const FullWidth: Story = {
	args: {
		children: 'Primary With FullWidth',
		variant: 'primary',
		fullWidth: true,
	},
	parameters: {
		layout: 'padded',
	},
};

export const WithIcon: Story = {
	render: (props) => {
		return (
			<Button variant="primary" {...props}>
				<Icon name="plus" className="mr-2" />
				Add new sneakers
			</Button>
		);
	},
};
