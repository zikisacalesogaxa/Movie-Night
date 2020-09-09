var _userModel = require('../models/user.model');
var bcrypt = require('bcrypt');
var saltRounds = 10;

module.exports = {
	login: async (username, password) => {
		return _userModel
			.findOne({
				username: username
			})
			.then((user) => {
				let passwordHash = user.password;
				if (bcrypt.compareSync(password, passwordHash)) {
					return true;
				} else {
					return false;
				}
			})
			.catch((err) => {
				console.log(err);
			});
	},
	signup: async (username, password) => {
		var passwordHash = bcrypt.hashSync(password, saltRounds);
		return _userModel
			.findOne({
				username: username
			})
			.then((user) => {
				if (user) {
					return false;
				} else {
					return _userModel
						.create({
							username: username,
							password: passwordHash
						})
						.then((user) => {
							return true;
						})
						.catch((err) => {
							console.log(err);
						});
				}
			});
	}
};
