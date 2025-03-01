const express = require('express')
const cors = require('cors')
const mysql2 = require('mysql2')
require('dotenv').config()

const app = express()
app.use(cors()) // Enable CORS

// Serve static files from 'public' folder
app.use(express.static('public'));

// Check if DATABASE_URL is set
if (!process.env.DATABASE_URL) {
    console.error("❌ DATABASE_URL is not set. Check Railway environment variables.");
    process.exit(1);
}

// Create a persistent connection pool
const pool = mysql2.createPool(process.env.DATABASE_URL);

// Users route
app.get('/users', (req, res) => {
    pool.query('SELECT * FROM users', (err, results) => {
        if (err) {
            console.error("❌ MySQL Query Error:", err);
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

// Posts route
app.get('/posts', (req, res) => {
    pool.query('SELECT * FROM posts', (err, results) => {
        if (err) {
            console.error("❌ MySQL Query Error:", err);
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:3000/ or Visit: https://myapi-from-boss-free-use.up.railway.app/`);
});
