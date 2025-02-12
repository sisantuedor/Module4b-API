const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Middleware (MUST be before routes)
app.use(cors());
app.use(express.json());

// ✅ PostgreSQL Connection Setup
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});

// ✅ Test Database Connection
pool.connect()
    .then(() => console.log('✅ Connected to PostgreSQL'))
    .catch(err => console.error('❌ Database connection error:', err));

// ✅ Test Route to Verify API is Running
app.get('/', (req, res) => {
    res.send('✅ API is working!');
});

// ✅ GET all TV shows
app.get('/shows', async (req, res) => {
    console.log('✅ GET /shows endpoint was hit'); // Debugging log
    try {
        const result = await pool.query('SELECT * FROM shows');
        console.log('✅ Retrieved TV shows:', result.rows); // Logs the fetched data
        res.json(result.rows);
    } catch (err) {
        console.error('❌ Error retrieving TV shows:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// ✅ Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
