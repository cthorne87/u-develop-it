require('dotenv').config()
const mysql = require('mysql2');

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: 'election'
    },
    console.log('connected to the election database')
  );

module.exports = db;