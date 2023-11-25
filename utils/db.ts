import { Sequelize } from 'sequelize';
import { SequelizeStorage, Umzug } from 'umzug';

import { DATABASE_URL } from './config';

const sequelize = new Sequelize(DATABASE_URL);

const migrator = new Umzug({
    migrations: {
        glob: 'migrations/*ts'
    },
    storage: new SequelizeStorage({
        sequelize,
        tableName: 'migrations'
    }),
    context: sequelize,
    logger: console
});

const runMigrations = async () => {
    const migrations = await migrator.up();
    
    console.log('Migrations up to date', {
        files: migrations.map(mig => mig.name)
    });
};

const connectToDatabase = async () => {
    try {
        await sequelize.authenticate();
        await runMigrations();
    } catch (error) {
        return process.exit(1);
    }
};

export { connectToDatabase, sequelize, migrator };
export type Migration = typeof migrator._types.migration;