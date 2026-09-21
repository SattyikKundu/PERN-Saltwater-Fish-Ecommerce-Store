
import { Pool } from 'pg';   // Pool class from 'pg' (node-postgres) library used 
                             // to establish and manage PostgreSQL database connection

import dotenv from 'dotenv'; // loads .env variables into process.env 
                             // so they can be accessed anywhere in server code

dotenv.config();


const pool = new Pool({
  host:     process.env.DB_HOST,
  port:     Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
  user:     process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  ssl: {
    rejectUnauthorized: false
  }
});


export default pool;
