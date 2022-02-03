const { 
    User
} = require('../models');

module.exports = {
    createUser: async (req, res) => {
        const { username, email, password } = req.body;
        if(!username || !email || !password) {
            return res.status(400).json({ error: 'You must provide a username, email and password.' });
        }
        try {
            const user = await User.create({
                username,
                email,
                password,
            });
            res.json(user);
        } catch (e) {
            res.json(e);
        }
    },
    getAllUsers: async (req, res) => {
        try {
            const usersData = await User.findAll({});
            const users = usersData.map(user => user.get({ plain: true }));
            res.render('allUsers', {
                users,
                loggedInUser: req.session.user || null,
            });
        } catch (e) {
            res.json(e);
        }
    },
    getUserById: async (req, res) => {
        try {
            const userData = await User.findByPk(req.params.userId);
            const user = userData.get({ plain: true });
            res.render('singleUser', {
                user
            });
        } catch (e) {
            res.json(e);
        }
    },
    login: async (req, res) => {
        try{
            const userData = await User.findOne({ email: req.body.email });
            const userFound = userData.get({ plain: true });
            if (userFound.password === req.body.password) {
                req.session.save(() => {
                    req.session.user = userFound;
                    res.json({ success: true });
                });
            }
        } catch (e) {
            res.json(e);
        }
    }
}