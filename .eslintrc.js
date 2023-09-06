module.exports = {
	extends: ['next/core-web-vitals', 'prettier', 'plugin:storybook/recommended'],
	rules: {
		'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
		'no-console': ['warn', { allow: ['warn', 'error', 'info', 'table'] }],
		'no-param-reassign': ['error', { props: true }],
	},
	overrides: [
		{
			files: ['src/types/**/*.d.ts'],
			rules: {
				'no-unused-vars': 'off',
			},
		},
	],
};
