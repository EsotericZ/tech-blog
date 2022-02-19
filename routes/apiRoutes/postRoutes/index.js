const router = require('express').Router();
const { createPost, editPost, deletePost } = require('../../../controllers/postController');

router.post('/newpost', createPost);
router.post('/editpost', editPost);
router.post('/deletepost', deletePost);

module.exports = router;