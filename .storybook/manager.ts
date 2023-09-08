import { addons } from '@storybook/manager-api';

import SnTheme from './themes/SnTheme';

addons.setConfig({
	theme: SnTheme,
});
