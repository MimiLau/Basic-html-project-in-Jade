module.exports = {
	options: {
		report: 'min',
		shorthandCompacting: false,
		roundingPrecision: -1
	},
	dev: {
		files: {
			'assets/css/main.css': ['assets/css/main.css']
		}
	},
	dist: {
		files: {
			'assets/css/main.css': ['assets/css/main.css']
		}
	}
};
