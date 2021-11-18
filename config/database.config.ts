import * as dotenv from 'dotenv';
import { IDatabaseConfig } from '../src/interfaces/dbConfig.interface';

dotenv.config({path: './config/.env'});

export const databaseConfig: IDatabaseConfig = {
    development: {
        username: process.env.DB_USER_LOCAL,
        password: process.env.DB_PASS_LOCAL,
        database: process.env.DB_NAME_LOCAL,
        host: process.env.DB_HOST_LOCAL,
        port: process.env.DB_PORT_LOCAL,
        dialect: process.env.DB_DIALECT_LOCAL,
    },
    test: {
        username: process.env.DB_USER_LOCAL,
        password: process.env.DB_PASS_LOCAL,
        database: process.env.DB_NAME_LOCAL,
        host: process.env.DB_HOST_LOCAL,
        port: process.env.DB_PORT_LOCAL,
        dialect: process.env.DB_DIALECT_LOCAL,
    },
    production: {
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT,
    },
};
