'use strict';
module.exports = {
	options: {
	  pretty: true
	},
	dev: {
	  options: {
			pretty: false,
			files: {
			    "*": ["blogs/**/*.jade", "*.jade", "!layouts/*.jade"]
			}
	  }
	}
};
