'use strict';
module.exports = {
	mkdir: {
		command:	'mkdir views/"<%= create.post %>"'
	},
	copy: {
		command:	'cp views/first-post/index.jade views/<%= create.post %>'
	},
	touch: {
		command:	'touch views/<%= create.post %>/README.md'
	},
	edit: {
		command:	'atom views/<%= create.post %>/README.md'
	}
};
