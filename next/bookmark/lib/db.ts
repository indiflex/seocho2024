import mysql from 'mysql2/promise';

const {
  DB_HOST: host,
  DB_USER: user,
  DB_PASS: password,
  DB_SCHEMA: database,
} = process.env;

const config = {
  host,
  user,
  password,
  database,
  waitForConnections: true,
  connectionLimit: 3,
  maxIdle: 3,
  idleTimeout: 60000,
};
// console.log('🚀  config:', config);
const pool = mysql.createPool(config);

export const query = async (sql: string, params: unknown[]) => {
  const conn = await pool.getConnection();
  try {
    const [rows, fields] = await conn.query(sql, params);
    return [rows, fields];
  } catch (error) {
    console.table({ error });
    throw error;
  } finally {
    conn.release();
  }
};
