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
        author: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        comments: {
            type: DataTypes.STRING,
        }
    },
    {
        sequelize,
        freezeTableName: true,
        modelName: 'post',
    }
);

module.exports = Post;