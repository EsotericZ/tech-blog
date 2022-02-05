const router = require('express').Router();
const { createComment } = require('../../../controllers/commentController');

router.post('/newcomment', createComment);

module.exports = router;