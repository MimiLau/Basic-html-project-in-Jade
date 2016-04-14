'use strict';
module.exports = {
	options: {
	  pretty: true
	},
	dev: {
	  options: {
			pretty: true,
			files: {
			    "*": ["blogs/**/*.jade", "/*.jade", "!layouts/*.jade"]
			  }
	  }
	}
};
