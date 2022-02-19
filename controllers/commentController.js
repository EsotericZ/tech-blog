const { Comment, Post } = require('../models');

module.exports = {
    renderComment: async (req, res) => {
        try {
			const userPostData = await Post.findAll({
				where: {
					userId: req.session.user.id,
				}
			});
			res.render('newcomment', {
				userPosts: userPostData.map(userPost => userPost.get({ plain: true })),
				user: req.session.user,
			});
		} catch (e) {
			res.json(e);
		}
    },

    createComment: async (req, res) => {
        const { remarks } = req.body;
        try {
            const newComment = await Comment.create({
                remarks,
                // postId: req.params.id,
                userId: req.session.user.id,
            });
            res.json({ newComment });
        } catch (e) {
            res.json(e);
        }
    },
}