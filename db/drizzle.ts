// db.ts
import { neon } from '@neondatabase/serverless';
import { drizzle as drizzleNeon } from 'drizzle-orm/neon-http';
import { drizzle as drizzlePg } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

import * as schema from './schema';
import 'dotenv/config';

// Check if DATABASE_URL is defined
if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not defined');
}

// Safe DATABASE_URL that is guaranteed to be string
const DATABASE_URL = process.env.DATABASE_URL;

// Check if in production mode
const isProduction = process.env.NODE_ENV === 'production';

// Create db based on environment
export const db = isProduction
  ? drizzleNeon(neon(DATABASE_URL), { schema })
  : drizzlePg(
      new Pool({
        connectionString: DATABASE_URL,
        ssl: isProduction ? { rejectUnauthorized: false } : undefined,
      }),
      { schema }
    );

// Connection test function
export async function testConnection() {
  try {
    if (isProduction) {
      const sql = neon(DATABASE_URL);
      const result = await sql`SELECT NOW()`;
      console.log('✅ Database connection successful:', result[0]);
    } else {
      const pool = new Pool({
        connectionString: DATABASE_URL,
        ssl: undefined,
      });
      const client = await pool.connect();
      const result = await client.query('SELECT NOW()');
      client.release();
      console.log('✅ Database connection successful:', result.rows[0]);
    }
    return true;
  } catch (error) {
    console.error('❌ Database connection failed:', error);
    return false;
  }
}
