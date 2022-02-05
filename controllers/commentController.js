const { Comment } = require('../models');

module.exports = {
    renderComment: async (req, res) => {
        res.render('newcomment');
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