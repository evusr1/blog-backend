import { Model, DataTypes } from "sequelize";
import { sequelize } from "../utils/db";

class Comment extends Model {}

Comment.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    body: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    sequelize,
    underscored: true,
    timestamps: true,
    modelName: 'comment'
});

export default Comment;