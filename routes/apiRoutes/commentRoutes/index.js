const router = require('express').Router();
const { 
    createComment,
    getInformation,
    setPost,
 } = require('../../../controllers/commentController');

router.post('/newcomment', createComment);

router.route('/:postId')
    .get(getInformation);

router.route('/set')
    .post(setPost);

module.exports = router;