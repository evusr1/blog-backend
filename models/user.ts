import { Model, DataTypes } from "sequelize";
import { sequelize } from "../utils/db";

class User extends Model {}

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    name: {
        type: DataTypes.STRING
    },
    passwordHash: {
        type: DataTypes.STRING,
        allowNull: false
    }

}, {
    defaultScope: {
        attributes: {
            exclude: ['passwordHash']
        }
    },
    hooks: {
        afterCreate: (record) => {
            delete record.dataValues.passwordHash;
        },
        afterUpdate: (record) => {
            delete record.dataValues.passwordHash;
        }
    },
    sequelize,
    underscored: true,
    timestamps: true,
    modelName: "user"
});

export default User;