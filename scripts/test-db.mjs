/* eslint-disable no-undef */
import dotenv from 'dotenv';
import pg from 'pg';

dotenv.config({ path: '.env.local' });

const { Pool } = pg;

async function testConnection() {
  console.log('Testing database connection...');

  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });

  console.log(
    'DATABASE_URL:',
    process.env.DATABASE_URL?.substring(0, 20) + '...'
  );
  try {
    const result = await pool.query('SELECT NOW()');
    console.log('✅ Database connection successful:', result.rows[0]);
    await pool.end();
    return true;
  } catch (error) {
    console.error('❌ Database connection failed:', error);
    await pool.end();
    return false;
  }
}

testConnection()
  .then(success => {
    if (success) {
      console.log('Database connection test completed successfully');
      process.exit(0);
    } else {
      console.error('Database connection test failed');
      process.exit(1);
    }
  })
  .catch(error => {
    console.error('Unexpected error:', error);
    process.exit(1);
  });
