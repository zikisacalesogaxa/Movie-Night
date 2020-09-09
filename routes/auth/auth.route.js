var express = require('express');
var router = express.Router();

var authController = require('../../controllers/auth.controller');

/* POST login. */
router.post('/login', function(req, res, next) {
	let status = res.statusCode;
	let { username, password } = req.body;
	authController.login(username, password).then((login) => {
		res.json({
			status,
			login
		});
	});
});

/* POST signup. */
router.post('/signup', function(req, res, next) {
	let status = res.statusCode;
	let { username, password } = req.body;
	authController.signup(username, password).then((signedup) => {
		res.json({
			status,
			signedup
		});
	});
});

module.exports = router;
