'use strict';
module.exports = {
	scss: {
		files: 'src/style/**/*.scss',
		tasks: ['postcss:dev', 'sass:dev']
	},
	js: {
		files: 'src/js/**/*.js',
		tasks: ['js']
	}
	// jade:{
	// 	files: ["views/*.jade"],
	// 	tasks: ["jade"]
	// }
};
