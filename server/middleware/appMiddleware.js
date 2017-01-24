var morgan = require('morgan');
var bodyParser = require('body-parser');

module.exports = function(app) {
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(function(err, req, res, next) {
    if (err) {
      res.status(500).send(err);
    }
  });
};
