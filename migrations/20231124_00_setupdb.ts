import { DataTypes } from "sequelize";

import type { Migration } from "../utils/db";

const up: Migration =  async ({context: sequelize}) => {
    const queryInterface = sequelize.getQueryInterface();

    await queryInterface.createTable('users', {
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
    });

    await queryInterface.createTable('sessions', {
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
    });

    await queryInterface.createTable('posts', {
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
    });

    await queryInterface.createTable('comments', {
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
    });
};


const down: Migration =  async ({context: sequelize}) => {
    await sequelize.authenticate();

    const queryInterface = sequelize.getQueryInterface();

    await queryInterface.dropTable('sessions');
    await queryInterface.dropTable('comments');
    await queryInterface.dropTable('posts');
    await queryInterface.dropTable('users');


};
export {
    up,
    down
};