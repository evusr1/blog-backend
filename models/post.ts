import { Model, DataTypes } from "sequelize";
import { sequelize } from "../utils/db";

class Post extends Model {}

Post.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }, 
    title: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    body: {
        type: DataTypes.TEXT,
        allowNull: false
    }
},
{
    sequelize,
    underscored: true,
    timestamps: true,
    modelName: 'post'
});


export default Post;