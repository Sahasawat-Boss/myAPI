const express = require('express')
const cors = require('cors')
const mysql2 = require('mysql2')
require('dotenv').config()

const app = express()

// Check if DATABASE_URL exists
if (!process.env.DATABASE_URL) {
    console.error("❌ DATABASE_URL is not set. Please check your Railway environment variables.");
    process.exit(1); // Stop the app if the database URL is missing
}

// Create a MySQL connection
const connection = mysql2.createConnection(process.env.DATABASE_URL);

// Check if the connection works
connection.connect(err => {
    if (err) {
        console.error("❌ MySQL Connection Error:", err);
        process.exit(1); // Stop the app if the database connection fails
    } else {
        console.log("✅ Connected to MySQL Database");
    }
});

app.get('/', function (req, res, next) {
    res.json({ msg: 'Free API Server' })
});

// Get all users
app.get('/users', function (req, res, next) {
    connection.query(
        'SELECT * FROM users',  // Fixed 'SELET' typo
        function (err, results, fields) {
            if (err) {
                res.status(500).json({ error: err.message }); // Return error message
            } else {
                res.json(results);
            }
        }
    );
});

console.log("🚀 Server is running on port 3000 | visit: http://localhost:3000/")
app.listen(process.env.PORT || 3000);
