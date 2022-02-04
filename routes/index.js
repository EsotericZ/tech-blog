const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const { renderDashboard, loginView, signupView } = require('../controllers/userController');
const { getAllTodos } = require('../controllers/todoController');
const { getUserPosts } = require('../controllers/postController');

router.get('/', loginView);
router.get('/todos', getAllTodos);
router.get('/homepage', getUserPosts);
router.get('/dashboard', renderDashboard);
router.get('/login', loginView);
router.get('/signup', signupView);

router.use('/api', apiRoutes);

module.exports = router;