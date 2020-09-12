var express = require('express');
var router = express.Router();

var movieController = require('../controllers/movies.controller');

/* GET movies listing. */
router.get('/movies', function(req, res, next) {
	let status = res.statusCode;
	movieController.getMovies().then((movies) => {
		res.json({
			status,
			movies
		});
	});
});

/* GET movie listing. */
router.get('/movie', function(req, res, next) {
	let status = res.statusCode;
	let { movieName } = req.query;
	movieController.getMovie(movieName).then((movie) => {
		res.json({
			status,
			movie
		});
	});
});

// Create movie
router.post('/movie', function(req, res, next) {
	let status = res.statusCode;
	let { movieName } = req.body;
	movieController.createMovie(movieName).then((movie) => {
		res.json({
			status,
			movie
		});
	});
});

// Book movie
router.put('/movie/book', function(req, res, next) {
	let status = res.statusCode;
	let { username, movie, time } = req.body;
	movieController.bookMovie(username, movie, time).then((movie) => {
		res.json({
			status,
			movie
		});
	});
});

// Cancel movie
router.put('/movie/cancel', function(req, res, next) {
	let status = res.statusCode;
	let { username, movie, time } = req.body;
	movieController.cancelMovie(username, movie, time).then((movie) => {
		res.json({
			status,
			movie
		});
	});
});

module.exports = router;
