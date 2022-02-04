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

User.hasMany(Post, {
	foreignKey: 'userId',
	onDelete: 'CASCADE',
});
Post.belongsTo(User, {
	foreignKey: 'userId'
});


module.exports = {
    Todo,
	Post,
    User,
};