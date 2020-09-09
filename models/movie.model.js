const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
	movie: {
		type: String,
		unique: true
	},
	booking: {
		username: {
			type: String,
			unique: true
		},
		time: {
			type: String
		}
	},
	cancellation: {
		username: {
			type: String,
			unique: true
		},
		time: {
			type: String
		}
	}
});

var movie = mongoose.model('movies', movieSchema);

module.exports = movie;
