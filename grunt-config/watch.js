'use strict';
module.exports = {
	scss: {
		files: 'src/style/**/*.scss',
		// tasks: ['postcss:dev', 'sass:dev']
		tasks: ['sass:dev']
	},
	js: {
		files: 'src/js/**/*.js',
		tasks: ['js']
	}
	// jade:{
	// 	files: ["blogs/*.jade"],
	// 	tasks: ["jade"]
	// }
};
