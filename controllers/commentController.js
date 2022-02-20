const { Comment, Post, User } = require('../models');

module.exports = {

    setPost: async (req, res) => {
        const { postId } = req.body;
        req.session.postId = postId;
    },

    getInformation: async (req, res) => {
        const postId = req.params.postId;
        try {
            const allCommentData = await Comment.findAll({
                where: {
                    postId
                },
				include: [{
					model: User,
					attributes: ['username', ],
				}],
                order: [
					["createdAt", "ASC"],
				],
            });
            const postData = await Post.findByPk(postId);
            res.render('comment', {
                allComments: allCommentData.map(comment => comment.get({ plain: true })),
                posts: postData.get({ plain: true }),
                user: req.session.user,
            });
        } catch (e) {
            res.json(e);
        }
    },

    createComment: async (req, res) => {
        const { remarks, postId } = req.body;
        try {
            await Comment.create({
                remarks,
                postId,
                userId: req.session.user.id,
            });
            res.redirect(request.get('referer'));
        } catch (e) {
            res.json(e);
        }
    },
}