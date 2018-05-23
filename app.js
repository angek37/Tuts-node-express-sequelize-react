const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

// Configura la app Express
const app = express();

// Log request to the console
app.use(logger('dev'));

// Parse incoming request data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Setup a default catch-all route that sends back a welcome message in JSON format.
require('./server/routes')(app);
app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to the beginning of nothingness',
}));

module.exports = app;