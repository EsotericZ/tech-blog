const { Comment } = require('../models');
// const { Comment, Post } = require('../models');

module.exports = {
    // renderComment: async (req, res) => {
    //     try {
	// 		const userPostData = await Post.findAll({
	// 			where: {
	// 				userId: req.session.user.id,
	// 			}
	// 		});
	// 		res.render('newcomment', {
	// 			userPosts: userPostData.map(userPost => userPost.get({ plain: true })),
	// 			user: req.session.user,
	// 		});
	// 	} catch (e) {
	// 		res.json(e);
	// 	}
    // },

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