const { Model, DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../config');

class Post extends Model {}

Post.init(
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: UUIDV4,
			primaryKey: true,
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false,
            validate: {
                max: 100, 
            },
		},
		body: {
			type: DataTypes.STRING,
			allowNull: false,
            validate: {
                max: 1000, 
            },
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
		// timestamps: false,
		freezeTableName: true,
		modelName: 'post'
	}
);

module.exports = Post;