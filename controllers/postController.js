const { Post, Comment, User } = require('../models');

module.exports = {
	getUserPosts: async (req, res) => {
		if (!req.session.loggedIn) {
			return res.redirect('/login');
		}
		try {
			const userPostData = await Post.findAll({
				where: {
					userId: req.session.user.id,
				},
				order: [
					["createdAt", "DESC"],
				]
			});
			res.render('homepage', {
				userPosts: userPostData.map(userPost => userPost.get({ plain: true })),
				user: req.session.user,
			});
		} catch (e) {
			res.json(e);
		}
	},

	getAllPosts: async (req, res) => {
		if (!req.session.loggedIn) {
			return res.redirect('/login');
		}
		try {
			const allPostData = await Post.findAll({
				include: [{
					model: Comment,
					attributes: ['remarks', 'createdAt', 'postId'],
				},
				{
					model: User,
					attributes: ['username'],
				}],
				order: [
					["createdAt", "DESC"],
				]
			});
			res.render('dashboard', {
				allPosts: allPostData.map(userPost => userPost.get({ plain: true })),
			});
		} catch (e) {
			res.json(e);
		}
	},

	renderPost: async (req, res) => {
		res.render('newpost');
	},

	createPost: async (req, res) => {
		const { title, body } = req.body;
		try {
			await Post.create({
				title,
                body,
				userId: req.session.user.id,
			});
			res.redirect(request.get('referer'));
		} catch (e) {
			res.json(e);
		}
	},

	editPost: async (req, res) => {
		const { title, body, id } = req.body;
		try {
			await Post.update({
				title,
				body,
			},
			{
				where: {
					id
				}
			});
			res.redirect(request.get('referer'));
		} catch (e) {
			res.json(e);
		}
	},

	deletePost: async (req, res) => {
		const { id } = req.body;
		try {
			await Post.destroy({
				where: {
					id
				}
			});
			res.redirect(request.get('referer'));
		} catch (e) {
			res.json(e);
		}
	},
}