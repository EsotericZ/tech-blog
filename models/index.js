const Comment = require('./Comment');
const Post = require('./Post');
const User = require('./User');

User.hasMany(Comment, {
	foreignKey: 'userId',
	onDelete: 'CASCADE',
});
Comment.belongsTo(User, {
	foreignKey: 'userId'
});

Post.hasMany(Comment, {
	foreignKey: 'postId',
	onDelete: 'CASCADE',
});
Comment.belongsTo(Post, {
	foreignKey: 'postId'
});

User.hasMany(Post, {
	foreignKey: 'userId',
	onDelete: 'CASCADE',
});
Post.belongsTo(User, {
	foreignKey: 'userId'
});

module.exports = {
	Comment,
	Post,
    User,
};