const router = require('express').Router();
const { 
    createUser,
    getAllUsers,
    login,
} = require('../../../controllers/userController')

router.route('/')
    .get(getAllUsers)
    .post(createUser);

// router.route('/:userId')
//     .get(getUserById);

router.post('/login', login);

module.exports = router;