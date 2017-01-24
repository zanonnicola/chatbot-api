var app = require('./server/server');
var config = require('./server/config/config');

app.listen(config.port);
logger.log('listening on http://localhost:' + config.port);
