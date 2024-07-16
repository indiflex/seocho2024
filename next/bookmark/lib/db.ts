import mysql, { ResultSetHeader, RowDataPacket } from 'mysql2/promise';

const {
  DB_HOST: host,
  DB_USER: user,
  DB_PASS: password,
  DB_SCHEMA: database,
} = process.env;

const pool = mysql.createPool({
  host,
  user,
  password,
  database,
  waitForConnections: true,
  connectionLimit: 3,
  maxIdle: 3,
  idleTimeout: 60000,
});

// to read
export const query = async <T extends RowDataPacket>(
  sql: string,
  params: unknown[]
) => {
  const conn = await pool.getConnection();
  try {
    const [rows] = await conn.query<T[]>(sql, params);
    console.log('🚀  result:', rows);
    // return result;
    return rows;
  } catch (error) {
    console.table({ error });
    throw error;
    // throw new Error(JSON.stringify(error));
  } finally {
    conn.release();
  }
};

// to write
export const execute = async (sql: string, params: unknown[]) => {
  const conn = await pool.getConnection();
  try {
    const [rows] = await conn.query<ResultSetHeader>(sql, params);
    // return result;
    return rows;
  } catch (error) {
    console.table({ error });
    throw error;
    // throw new Error(JSON.stringify(error));
  } finally {
    conn.release();
  }
};
