const fs = require('fs');
const path = require('path');
const mysql = require('mysql2/promise');
require('dotenv').config();

const initDb = async () => {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD
    });

    const initSql = fs.readFileSync(path.join(__dirname, 'initdb.sql'), 'utf8');
    await connection.query(initSql);
    await connection.end();

    console.log('Database and tables initialized successfully.');
};

initDb().catch((err) => {
    console.error('Error initializing database:', err);
    process.exit(1);
});
