'use strict';
module.exports = function (grunt) {
	return {
		mkdir: {
			options: {
				questions: [
					{
						config: 'create.post',
						type: 'input',
						message: 'What is the blog name?'
					}
					// {
					// 	config: 'screenshot.server.running',
					// 	type: 'confirm',
					// 	message: 'Is your devServer running at `http://localhost:3000`?',
					// 	when: function (answers) {
					// 		return answers['screenshot.take'] === true;
					// 	}
					// }
				],
				then: function (results, done) {
					if (results['create.post'] ) {
						grunt.task.run(['shell']);
						done();
						return true;
					}
					return false;
				}
			}
		}
	};
};
