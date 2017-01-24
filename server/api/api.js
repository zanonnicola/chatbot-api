var router = require('express').Router();

// api router will mount other routers
// for all our resources
router.use('/images', require('../routes/imagesRouter'));
router.use('/messages', require('../routes/messagesRouter'));

module.exports = router;
