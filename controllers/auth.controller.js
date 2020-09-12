var _userModel = require('../models/user.model');

module.exports = {
	bookMovie: async (username, movie, time) => {
		let filter = { username: username };
		return _userModel.findOne(filter).then((user) => {
			if (user) {
				return _userModel
					.findOneAndUpdate(filter, {
						$push: {
							[time]: movie
						}
					})
					.then((updatedUser) => {
						return updatedUser;
					})
					.catch((err) => {
						console.log(err);
					});
			} else {
				return _userModel
					.create({
						username: username,
						[time]: [ movie ]
					})
					.then((newUser) => {
						return newUser;
					})
					.catch((err) => {
						console.log(err);
					});
			}
		});
	},
	cancelMovie: async (username, movie, time) => {
		let filter = { username: username };
		return _userModel
			.findOneAndUpdate(filter, {
				$pull: {
					[time]: movie
				}
			})
			.then((updatedUser) => {
				return updatedUser;
			})
			.catch((err) => {
				console.log(err);
			});
	}
};
