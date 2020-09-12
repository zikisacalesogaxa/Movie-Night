var express = require('express');
var router = express.Router();

var authController = require('../../controllers/auth.controller');

/* POST book. */
router.post('/book', function(req, res, next) {
	let status = res.statusCode;
	let { username, movie, time } = req.body;
	authController.bookMovie(username, movie, time).then((booked) => {
		res.json({
			status,
			booked
		});
	});
});

/* POST cancel. */
router.post('/cancel', function(req, res, next) {
	let status = res.statusCode;
	let { username, movie, time } = req.body;
	authController.cancelMovie(username, movie, time).then((cancelled) => {
		res.json({
			status,
			cancelled
		});
	});
});

module.exports = router;
