import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import { PlusIcon } from '@/ui/Icon';

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

export const Danger: Story = {
	args: {
		children: 'Danger',
		variant: 'danger',
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
				<PlusIcon className="mr-2" />
				Add new sneakers
			</Button>
		);
	},
};
