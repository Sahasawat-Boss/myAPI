const express = require('express')
const cors = require('cors')
const mysql2 = require('mysql2')
require('dotenv').config()

const app = express()
app.use(cors()) // Enable CORS

// Check if DATABASE_URL is set
if (!process.env.DATABASE_URL) {
    console.error("❌ DATABASE_URL is not set. Check Railway environment variables.");
    process.exit(1);
}

// Create a persistent connection pool (fixes "closed state" error)
const pool = mysql2.createPool(process.env.DATABASE_URL);

// Root route
app.get('/', (req, res) => {
    res.json({ msg: 'Free API Server' });
    res.json({ msg: 'Sample Users Data visit: https://myapi-from-boss-free-use.up.railway.app/users' });
});

// Users route (Fixes MySQL connection issue)
app.get('/users', (req, res) => {
    pool.query('SELECT * FROM users', (err, results) => {
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
    console.log(`🚀 Server running on port ${PORT} | Visit: https://myapi-from-boss-free-use.up.railway.app/`);
});
