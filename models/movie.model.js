const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
	movie: {
		type: String,
		unique: true
	},
	two_pm: {
		type: Array
	},
	five_pm: {
		type: Array
	},
	eight_pm: {
		type: Array
	}
});

var movie = mongoose.model('movies', movieSchema);

module.exports = movie;
