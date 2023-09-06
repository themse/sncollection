import type { Meta, StoryObj } from '@storybook/react';

import { Card, CardHeader, CardContent, CardFooter } from './Card';

const meta = {
	title: 'UI/Card',
	component: Card,
	tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	render: () => (
		<Card>
			<CardHeader>Card Header Example {`<header />`}</CardHeader>
			<CardContent>Card Content Example {`<div />`}</CardContent>
			<CardFooter>Card Footer Example {`<footer />`}</CardFooter>
		</Card>
	),
};

export const Hover: Story = {
	...Primary,
	parameters: {
		pseudo: { hover: true },
	},
};
