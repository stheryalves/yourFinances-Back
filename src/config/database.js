import knex from 'knex';
import dotenv from 'dotenv';
dotenv.config();
import db from './config.js';

const knexConfig = {
    client: 'mysql2',
    connection: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_SCHEMA,
    },
};

export default knexConfig;