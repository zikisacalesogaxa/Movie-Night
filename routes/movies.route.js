var express = require('express');
var router = express.Router();

var movieController = require('../controllers/movies.controller');

/* GET movies listing. */
router.get('/movies', function(req, res, next) {
	let status = res.statusCode;
	movieController.movies().then((movies) => {
		res.json({
			status,
			movies
		});
	});
});

/* GET movie listing. */
router.get('/movie', function(req, res, next) {
	let status = res.statusCode;
	let { movie } = req.query;
	movieController.movie(movie).then((movie) => {
		res.json({
			status,
			movie
		});
	});
});

// Book movie
router.post('/movie/book', function(req, res, next) {
	let status = res.statusCode;
	let { username, movie, time } = req.body;
	movieController.book(username, movie, time).then((movie) => {
		res.json({
			status,
			movie
		});
	});
});

// Cancel movie
router.post('/movie/cancel', function(req, res, next) {
	let status = res.statusCode;
	let { username, movie, time } = req.body;
	movieController.cancel(username, movie, time).then((movie) => {
		res.json({
			status,
			movie
		});
	});
});

module.exports = router;
