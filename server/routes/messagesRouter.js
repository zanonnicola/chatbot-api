var router = require('express').Router();
var _ = require('lodash');
var mocks = require('../../mockdata');

router.param('id', function(req, res, next, id) {
  var message = _.find(mocks.messages, function(o) { return o.id == id; })

  if (message) {
    req.message = message;
    next();
  } else {
    res.status(404).send({ error: 'Message not found' })
  }
});

router.get('/', function(req, res) {
  res.json(mocks.messages);
});

router.get('/:id', function(req, res){
  var message = req.message;
  res.json(message || {});
});

module.exports = router;
