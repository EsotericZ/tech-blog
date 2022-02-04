const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const { loginView, signupView } = require('../controllers/userController');
const { getAllTodos } = require('../controllers/todoController');
const { getUserPosts, getAllPosts } = require('../controllers/postController');

router.get('/', loginView);
router.get('/todos', getAllTodos);
router.get('/homepage', getUserPosts);
router.get('/dashboard', getAllPosts);
router.get('/login', loginView);
router.get('/signup', signupView);

router.use('/api', apiRoutes);

module.exports = router;