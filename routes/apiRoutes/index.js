const router = require('express').Router();
const userRoutes = require('./userRoutes');
const todoRoutes = require('./todoRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/users', userRoutes);
router.use('/todos', todoRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;