import type { Meta, StoryObj } from '@storybook/react';

import { TextInput } from './TextInput';
import { Icon } from '@/ui/Icon';

const meta = {
	title: 'UI/TextInput',
	component: TextInput,
	tags: ['autodocs'],
} satisfies Meta<typeof TextInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Empty: Story = {
	args: {
		formControl: {
			errorMessage: '',
		},
		input: {
			name: 'example',
			placeholder: 'Label',
		},
		label: {
			value: 'empty',
		},
	},
};

export const Hover: Story = {
	args: {
		...Empty.args,
		label: {
			value: 'hover',
		},
	},
	parameters: {
		pseudo: { hover: true },
	},
};

export const Active: Story = {
	args: {
		...Empty.args,
		label: {
			value: 'active',
		},
	},
	parameters: {
		pseudo: { active: true },
	},
};

export const Focus: Story = {
	args: {
		...Empty.args,
		label: {
			value: 'focus',
		},
	},
	parameters: {
		pseudo: { focus: true },
	},
};

export const Filled: Story = {
	args: {
		...Empty.args,
		input: {
			...Empty.args.input,
			value: 'Label',
		},
		label: {
			value: 'filled',
		},
	},
};

export const Alert: Story = {
	args: {
		formControl: {
			errorMessage: 'Alert message',
		},
		input: {
			...Empty.args.input,
			value: 'Label',
		},
		label: {
			value: 'alert',
		},
	},
};

export const Search: Story = {
	args: {
		formControl: {
			errorMessage: '',
		},
		input: {
			placeholder: 'Search',
			className: 'pl-11',
		},
	},

	render: (props) => (
		<div className="relative flex items-center">
			<Icon name="search" className="absolute left-3 text-gray-200" />
			<TextInput {...props} />
		</div>
	),
};
