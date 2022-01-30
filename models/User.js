const { Model, Datatypes, UUIDV4 } = require('sequelize');
const sequelize = require('../config');

class User extends Model {}

User.init(
    {
        id: {
            type: Datatypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
        },
        username: {
            type: Datatypes.STRING,
            allowNull: false,
            unique: true,
        },
        email: {
            type: Datatypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            }
        },
        password: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                len: [6],
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'user',
    }
);

module.exports = User;