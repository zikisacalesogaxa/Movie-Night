var _movieModel = require('../models/movie.model');
var _userModel = require('../models/user.model');

module.exports = {
	book: async (username, movieName, time) => {
		let filter = { movie: movieName };
		return _movieModel
			.findOne({
				movie: movieName
			})
			.then((movie) => {
				console.log(movie);
				if (!movie) {
					return _movieModel
						.create({
							movie: movieName,
							booking: {
								username: username,
								time: time
							}
						})
						.then((movie) => {
							return _userModel
								.findOneAndUpdate(
									{ username },
									{
										$push: {
											booked_movies: { movie: movie.movie, time }
										}
									}
								)
								.then((user) => {
									console.log(user);
									return true;
								})
								.catch((err) => {
									console.log(err);
								});
						})
						.catch((err) => {
							console.log(err);
						});
				} else {
					return _movieModel
						.findOneAndUpdate(filter, {
							booking: {
								username: username,
								time: time
							}
						})
						.then((movie) => {
							return _userModel
								.findOneAndUpdate(
									{ username },
									{
										$push: {
											booked_movies: { movie: movie.movie, time }
										}
									}
								)
								.then((user) => {
									console.log(user);
									return true;
								})
								.catch((err) => {
									console.log(err);
								});
						})
						.catch((err) => {
							console.log(err);
						});
				}
			});
	},
	cancel: async (username, movieName, time) => {
		let filter = { movie: movieName };
		return _movieModel
			.findOneAndUpdate(filter, {
				cancellation: {
					username: username,
					time: time
				}
			})
			.then(() => {
				return true;
			})
			.catch((err) => {
				console.log(err);
			});
	},
	movies: async () => {
		return _movieModel
			.find({})
			.then((movies) => {
				console.log(movies);
				return movies;
			})
			.catch((err) => {
				console.log(err);
			});
	}
};
