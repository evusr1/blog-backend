import dotenv from 'dotenv';
import { toNumber, toString } from './parse';

dotenv.config();

const DATABASE_URL = toString(
    process.env.NODE_ENV=='test' || process.env.NODE_ENV=='development' ?
        process.env.DATABASE_URL_TEST
        : process.env.DATABASE_URL
);

const PORT = toNumber(process.env.PORT);

export { DATABASE_URL, PORT };
