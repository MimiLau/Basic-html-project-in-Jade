'use strict';
module.exports = {
	mkdir: {
		command:	'mkdir blogs/"<%= create.post %>"'
	},
	copy: {
		command:	'cp blogs/first-post/index.jade blogs/<%= create.post %>'
	},
	touch: {
		command:	'touch blogs/<%= create.post %>/README.md'
	},
	edit: {
		command:	'atom blogs/<%= create.post %>/README.md'
	}
};
