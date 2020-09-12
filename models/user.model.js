const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
	username: {
		type: String,
		required: true
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

var user = mongoose.model('users', userSchema);

module.exports = user;
