'use strict';
module.exports = {
	options: {
	  pretty: true
	},
	dev: {
	  options: {
			pretty: true,
			files: {
			    "*": ["views/*.jade", "!layouts/*.jade"]
			  }
	  }
	}
};
