'use strict';
var scss = require('postcss-scss');
var stylelint = require('stylelint');

const scssSrc = 'src/**/*.scss';

module.exports = {
	options: {
		syntax: scss,
		processors: [
			stylelint()
		]
	},
	dev: {
		src: scssSrc
	},
	dist: {
		src: scssSrc
	}
};
