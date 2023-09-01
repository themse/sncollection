module.exports = {
	extends: ['next/core-web-vitals', 'prettier'],
	plugins: ['prettier'],
	rules: {
		'prettier/prettier': ['error'],
		'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
		'no-console': ['warn', { allow: ['warn', 'error', 'info', 'table'] }],
		'no-param-reassign': ['error', { props: true }],
	},
};
