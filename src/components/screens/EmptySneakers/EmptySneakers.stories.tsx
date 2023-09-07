import type { Meta, StoryObj } from '@storybook/react';

import { EmptySneakers } from './EmptySneakers';

const meta = {
	title: 'Screens/EmptySneakers',
	component: EmptySneakers,
} satisfies Meta<typeof EmptySneakers>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Template: Story = {};
