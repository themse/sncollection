import type { Meta, StoryObj } from '@storybook/react';

import { ProductCard } from './ProductCard';

const meta = {
	title: 'Components/ProductCard',
	component: ProductCard,
	tags: ['autodocs'],
	parameters: {
		layout: 'padded',
	},
} satisfies Meta<typeof ProductCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		title: 'Air jordan',
		brand: 'Nike',
		attributes: [
			{
				label: 'Year',
				value: '2023',
			},
			{
				label: 'Size',
				value: '11US',
			},
			{
				label: 'Price',
				value: '$230',
			},
		],
	},
};

export const Hover: Story = {
	args: {
		...Primary.args,
	},
	parameters: {
		pseudo: { hover: true },
	},
};
