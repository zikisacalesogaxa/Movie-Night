module.exports = () => {
	const mongoose = require('mongoose');
	const mongoURL = process.env.MONGO_DB_URL;
	mongoose.connect(mongoURL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false
	});

	var db = mongoose.connection;

	mongoose.Promise = global.Promise;

	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', () => {
		console.log('// Database connection established!');
	});
};
