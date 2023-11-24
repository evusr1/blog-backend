import { Sequelize } from 'sequelize';
import { DATABASE_URL } from './config';

const sequelize = new Sequelize(DATABASE_URL);

const connectToDatabase = async () => {
    try {
        await sequelize.authenticate();
    } catch (error) {
        return process.exit(1);
    }
};

export { connectToDatabase };