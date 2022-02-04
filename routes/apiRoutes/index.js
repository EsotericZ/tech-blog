const router = require('express').Router();
const userRoutes = require('./userRoutes');
const todoRoutes = require('./todoRoutes');
const postRoutes = require('./postRoutes');

router.use('/users', userRoutes);
router.use('/todos', todoRoutes);
router.use('/posts', postRoutes);

module.exports = router;