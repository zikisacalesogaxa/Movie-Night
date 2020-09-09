const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
	username: {
		type: String,
		unique: true,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	booked_movies: {
		type: Array
	},
	cancelled_movies: {
		type: Array
	}
});

var user = mongoose.model('users', userSchema);

module.exports = user;
