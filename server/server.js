var express = require('express');
var api = require('./api/api')

var app = express();
require('./middleware/appMiddleware')(app);

app.use('/api', api);

module.exports = app;
