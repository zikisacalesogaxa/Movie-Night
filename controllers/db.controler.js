var _movieModel = require('../models/movie.model');
var _userModel = require('../models/user.model');

module.exports = {
	getMovies: async function() {
		console.log('getting movies');
		return _movieModel
			.find({})
			.then((movies) => {
				return movies;
			})
			.catch((err) => {
				console.log(err);
			});
	},
	getMovie: async function(movie) {
		console.log('getting movie');
		return _movieModel
			.findOne({ movie: movie })
			.then((movie) => {
				return movie;
			})
			.catch((err) => {
				console.log(err);
			});
	},
	postMovie: async function(movie) {
		console.log('creating movie');
		return _movieModel
			.create({ movie: movie })
			.then((movie) => {
				return movie;
			})
			.catch((err) => {
				console.log(err);
			});
	},
	updateMovie: async function(username, movie, time, type) {
		console.log('updating movie');
		let filter = { movie: movie };
		let theMovie = await this.getMovie(movie);
		if (theMovie) {
			if (type == 'book') {
				return _movieModel
					.findOneAndUpdate(filter, {
						$push: {
							[time]: username
						}
					})
					.then((movie) => {
						return movie;
					})
					.catch((err) => {
						console.log(err);
					});
			}
			if (type == 'cancel') {
				return _movieModel
					.findOneAndUpdate(filter, {
						$pull: {
							[time]: username
						}
					})
					.then((movie) => {
						return movie;
					})
					.catch((err) => {
						console.log(err);
					});
			}
		}

		if (!theMovie) {
			let newMovie = await this.postMovie(movie);
			console.log('created movie', newMovie);

			return this.updateMovie(username, newMovie.movie, time, 'book').then((movie) => {
				return movie;
			});
		}
	},
	getUser: async function(username) {
		console.log('getting user');
		return _userModel
			.find({ username: username })
			.then((user) => {
				return user;
			})
			.catch((err) => {
				console.log(err);
			});
	},
	postUser: async function() {
		console.log('creating user');
		return _userModel
			.create({
				username: username,
				password: password
			})
			.then((user) => {
				return user;
			})
			.catch((err) => {
				console.log(err);
			});
	}
};
