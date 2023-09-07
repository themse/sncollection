import type { Meta, StoryObj } from '@storybook/react';

import { NotFoundSneakers } from './NotFoundSneakers';

const meta = {
	title: 'Screens/NotFoundSneakers',
	component: NotFoundSneakers,
} satisfies Meta<typeof NotFoundSneakers>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Template: Story = {};
