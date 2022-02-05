const { Model, DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../config');

class Comment extends Model {}

Comment.init(
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: UUIDV4,
			primaryKey: true,
		},
		remarks: {
			type: DataTypes.STRING,
			allowNull: false,
            validate: {
                max: 500, 
            },
		},
		postId: {
			type: DataTypes.UUID,
            references: {
				model: 'post',
				key: 'id',
			}
		},
		userId: {
			type: DataTypes.UUID,
			references: {
				model: 'user',
				key: 'id',
			}
		}
	},
	{
		sequelize,
		freezeTableName: true,
		modelName: 'comment'
	}
);

module.exports = Comment;