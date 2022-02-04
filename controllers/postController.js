const { Post } = require('../models');

module.exports = {
	getAllPosts: async (req, res) => {
		if (!req.session.loggedIn) {
			return res.redirect('/login');
		}
		try {
			const userPostData = await Post.findAll({
				where: {
					userId: req.session.user.id,
				}
			});
			res.render('homepage', {
				userPosts: userPostData.map(userPost => userPost.get({ plain: true })),
				user: req.session.user,
			});
		} catch (e) {
			res.json(e);
		}
	},

	createPost: async (req, res) => {
		const { post } = req.body;
		try {
			const newPost = await Post.create({
				title,
                body,
				userId: req.session.user.id,
			});
			res.json({ newPost });
		} catch (e) {
			res.json(e);
		}
	},
}