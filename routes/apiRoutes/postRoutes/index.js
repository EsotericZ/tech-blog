const router = require('express').Router();
const { createPost } = require('../../../controllers/postController');

router.post('/newpost', createPost);

module.exports = router;