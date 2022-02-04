const router = require('express').Router();
const { createPost } = require('../../../controllers/postController');

router.post('/', createPost);

module.exports = router;