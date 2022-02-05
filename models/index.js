const Comment = require('./Comment');
const Todo = require('./Todo');
const Post = require('./Post');
const User = require('./User');

User.hasMany(Todo, {
	foreignKey: 'userId',
	onDelete: 'CASCADE',
});
Todo.belongsTo(User, {
	foreignKey: 'userId'
});



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
	foreignKey: 'psotId'
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
    Todo,
	Post,
    User,
};