/**
 * Supabase Database Keepalive
 *
 * This script performs a lightweight PostgreSQL query against the application's
 * Supabase database to help keep the production database active during periods
 * of low traffic.
 *
 * In short, this script is used to send a "SELECT 1" query to Supabase to keep 
 * the database "awake" and minimize cold starts regarding database readh/write queries.
 *
 * In the main AWS production environment, this script is executed automatically by
 * a systemd timer on the EC2 instance at a scheduled interval.
 *
 * The script reuses the application's PostgreSQL connection configuration from
 * database/database.js and does not contain database credentials itself.
 *
 * Ultimately, this script is NOT REQUIRED for normal local development.
 *
 */


import pool from './database/database.js';

async function keepSupabaseActive() {
  try {
    await pool.query('SELECT 1;');
    console.log(`[Supabase Keepalive] Database query succeeded at ${new Date().toISOString()}`);
  } 
  catch (error) {
    console.error('[Supabase Keepalive] Database query failed:', error.message);
    process.exitCode = 1;
  } 
  finally {
    await pool.end();
  }
}

keepSupabaseActive();
