const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const { loginView, signupView } = require('../controllers/userController');
const { getUserPosts, getAllPosts, renderPost } = require('../controllers/postController');
const { renderComment } = require('../controllers/commentController');

router.get('/', loginView);
router.get('/homepage', getUserPosts);
router.get('/dashboard', getAllPosts);
router.get('/newpost', renderPost);
router.get('/newcomment', renderComment);
router.get('/login', loginView);
router.get('/signup', signupView);

router.use('/api', apiRoutes);

module.exports = router;