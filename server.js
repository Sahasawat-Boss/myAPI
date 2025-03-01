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

//Note >> only One res.json() is Allowed Per Route
// Root route - HTML API Info and documentation
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Free Open API by Boss</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 40px; padding: 20px; background-color:rgb(54, 54, 54); }
                h1 { color: #333; }
                .container { background: white; padding: 20px; border-radius: 10px; box-shadow: 2px 2px 10px rgba(0,0,0,0.1); }
                ul { list-style-type: none; padding: 0; }
                li { margin: 10px 0; }
                a { text-decoration: none; color: #007bff; font-weight: bold; }
                a:hover { text-decoration: underline; }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>🚀 Free Open API by Boss</h1>
                <p>Welcome to the free API! Below are the available endpoints:</p>
                <ul>
                    <li>📌 <strong>Users Data:</strong> <a href="/users">/users</a></li>
                    <li>📌 <strong>Posts Data:</strong> <a href="/posts">/posts</a></li>
                </ul>
                <p>🔗 Base URL: <strong>https://myapi-from-boss-free-use.up.railway.app</strong></p>
            </div>
        </body>
        </html>
    `);
});



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
    console.log(`🚀 Server running on port ${PORT} | Visit: https://myapi-from-boss-free-use.up.railway.app/`);
});
