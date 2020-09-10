var _movieModel = require('../models/movie.model');
var _userModel = require('../models/user.model');

var dbController = require('../controllers/db.controler');

module.exports = {
	book: async (username, movieName, time) => {
		return await dbController.updateMovie(username, movieName, time, 'book').then((movie) => {
			return dbController.getMovie(movie.movie).then((updatedMovie) => {
				console.log('booked', updatedMovie);
				return updatedMovie;
			});
		});
	},
	cancel: async (username, movieName, time) => {
		return await dbController.updateMovie(username, movieName, time, 'cancel').then((movie) => {
			return dbController.getMovie(movie.movie).then((updatedMovie) => {
				console.log('cancelled', updatedMovie);
				return updatedMovie;
			});
		});
	},
	movies: async () => {
		let movies = await dbController.getMovies();
		return movies;
	}
};
