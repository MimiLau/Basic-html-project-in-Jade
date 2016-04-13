'use strict';
module.exports = {
	dist: {
		options: {                       // Target options
      style: 'expanded'
    },
		files: {
			'assets/css/main.css': 'src/style/style.scss'
		}
	},
	dev: {
		files: {
			'assets/css/main.css': 'src/style/styles.scss'
		}
	}
};
