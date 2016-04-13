'use strict';

module.exports = {
	options: {
		configFile: '.eslintrc'
	},
	target: [
		'src/js/*.js',
		'!**/node_modules/**',
		'!**/coverage/**',
		'!themes/**',
		'!assets/**',
		'!builtAssets/**'
	]
};
