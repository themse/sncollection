import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
	stories: ['../src/components/**/*.stories.@(ts|tsx|mdx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-styling',
		'storybook-addon-pseudo-states',
	],
	framework: {
		name: '@storybook/nextjs',
		options: {},
	},
	docs: {
		autodocs: 'tag',
		defaultName: 'Overview',
	},
	staticDirs: [
		{
			from: '../src/styles/fonts',
			to: 'src/styles/fonts',
		},
	],
};

export default config;
