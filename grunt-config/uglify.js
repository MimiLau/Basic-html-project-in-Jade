'use strict';
module.exports = {
	options: {
		preserveComments: 'false',
		mangle: true,
		compress: true,
		beautify: false
	},
	src: {
		files: {
			'assets/js/main.min.js': [
				'src/js/main.js'
			]
		}
	}
};
