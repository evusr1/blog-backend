import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../utils/db';

class Session extends Model {}

Session.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'users', key: 'id'}
    },
    sessionToken: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    sequelize,
    underscored: true,
    timestamps: true,
    modelName: 'session'
});

export default Session;