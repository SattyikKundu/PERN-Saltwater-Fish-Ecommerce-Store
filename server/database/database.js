
import { Pool } from 'pg';   // Pool class from 'pg' (node-postgres) library used 
                             // to establish and manage PostgreSQL database connection

import dotenv from 'dotenv'; // loads .env variables into process.env 
                             // so they can be accessed anywhere in server code
dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false  
  }
});

export default pool;