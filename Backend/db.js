import pg from 'pg';
const { Pool } = pg;

let localPoolConfig = {
    user: 'postgres',
    password: 'Schdog@82',
    host: 'localhost',
    port: '5432',
    database: 'DB'
};

const poolConfig = process.env.DATABASE_URL ? 
{
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
} : localPoolConfig;

const pool = new Pool(poolConfig);
console.log(pool);
export default pool;
