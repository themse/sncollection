import { type Preview } from '@storybook/react';

import '@/styles/globals.css';
import { withFontLoaded } from './decorators/withFontLoaded';

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
	},

	decorators: [withFontLoaded],
};

export default preview;
