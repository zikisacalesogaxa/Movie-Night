var _movieModel = require('../models/movie.model');
var _userModel = require('../models/user.model');

var dbController = require('../controllers/db.controler');

module.exports = {
	bookMovie: async (username, movieName, time) => {
		return await dbController.updateMovie(username, movieName, time, 'book').then((movie) => {
			return dbController.getMovie(movie.movie).then((updatedMovie) => {
				console.log('booked', updatedMovie);
				return updatedMovie;
			});
		});
	},
	createMovie: async (movieName) => {
		return await dbController.postMovie(movieName).then((movie) => {
			console.log('created', movie);
			return movie;
		});
	},
	cancelMovie: async (username, movieName, time) => {
		return await dbController.updateMovie(username, movieName, time, 'cancel').then((movie) => {
			return dbController.getMovie(movie.movie).then((updatedMovie) => {
				console.log('cancelled', updatedMovie);
				return updatedMovie;
			});
		});
	},
	getMovies: async () => {
		let movies = await dbController.getMovies();
		return movies;
	},
	getMovie: async (movie) => {
		let theMovie = await dbController.getMovie(movie);
		return theMovie;
	}
};
