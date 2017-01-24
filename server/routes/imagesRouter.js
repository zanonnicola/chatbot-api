var router = require('express').Router();
var _ = require('lodash');
var mocks = require('../../mockdata');

router.param('id', function(req, res, next, id) {
  var image = _.find(mocks.images, function(o) { return o.id == id; })

  if (image) {
    req.image = image;
    next();
  } else {
    res.status(404).send({ error: 'Image not found' })
  }
});

router.get('/', function(req, res) {
  res.json(mocks.images);
});

router.get('/:id', function(req, res){
  var image = req.image;
  res.json(image || {});
});

module.exports = router;
