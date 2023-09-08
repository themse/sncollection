import { type Preview } from '@storybook/react';

import '@/styles/globals.css';
import {
	withFontLoaded,
	withDrawer,
	withCurrentSneakersProvider,
	withAllSneakersProvider,
} from './decorators';

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^(on|handle)[A-Z].*' },
		controls: {
			expanded: true,
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
				boolean: /^(has|is)[A-Z].*$/,
			},
		},
		layout: 'centered',
		options: {
			storySort: {
				order: ['Style Guide', 'UI', 'Components', 'Screens'],
			},
		},
	},

	decorators: [withFontLoaded, withDrawer, withCurrentSneakersProvider, withAllSneakersProvider],
};

export default preview;
