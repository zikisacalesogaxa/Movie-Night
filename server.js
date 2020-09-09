var bodyParser = require('body-parser');
var session = require('express-session');
var express = require('express');
var logger = require('morgan');
var cors = require('cors');

var moviesRouter = require('./routes/movies.route');
var authRouter = require('./routes/auth/auth.route');

var app = express();

app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 * 30 }, resave: true, saveUninitialized: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(cors());

// cors
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Credentials', 'true');
	res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials'
	);
	next();
});

// API routes
app.get('/', (req, res) => {
	res.json({
		getMovies: '/api/v1/movies',
		auth: '/api/v1/auth'
	});
});

app.use('/api/v1/', moviesRouter);
app.use('/api/v1/auth', authRouter);

module.exports = app;
