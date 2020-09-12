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
		console.log('getting movie', movie);
		return _movieModel
			.findOne({ movie_name: movie })
			.then((movie) => {
				return movie;
			})
			.catch((err) => {
				console.log(err);
			});
	},
	postMovie: async function(moviename) {
		console.log('creating movie', moviename);
		return _movieModel
			.findOne({ movie_name: moviename })
			.then((movie) => {
				if (!movie) {
					return _movieModel
						.create({ movie_name: moviename })
						.then((newMovie) => {
							return newMovie;
						})
						.catch((err) => {
							console.log(err);
						});
				} else {
					return 'movie exists';
				}
			})
			.catch((err) => {
				console.log(err);
			});
	},
	updateMovie: async function(username, movie, time, type) {
		console.log('updating movie', movie);
		let filter = { movie_name: movie };
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
	}
};
