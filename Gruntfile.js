'use strict';
var path = require('path');

module.exports = function(grunt) {
	require('time-grunt')(grunt); //Display the elapsed execution time of grunt tasks

	require('load-grunt-config')(grunt, {
		// path to task.js files, defaults to grunt dir
		configPath: path.join(process.cwd(), 'grunt-config'),
		// auto grunt.initConfig
		init: true,

		// additional config vars
		config: {
		}
	});

	var env = 'dev';

	// `grunt js`
  grunt.registerTask('js', ['uglify']);

	// `grunt css`
	grunt.registerTask('css', () => {
		grunt.task.run('sass:' + env);
		grunt.task.run('autoprefixer');
		// grunt.task.run('postcss:' + env);
		grunt.task.run('cssmin');
	});

	// `grunt`
	grunt.registerTask('default', ['js', 'css']);

};
