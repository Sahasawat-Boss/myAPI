//Source code API

const express = require('express')
const cors = require('cors')
const mysql2 = require('mysql2')
require('dotenv').config()

const app = express()

const connection = mysql2.createConnection(process.env.DATABASE_URL)

app.get('/', function(req, res, next) {
    res.json({msg: 'Free API Server'})
})

//Send/Get All data from table: Users
app.get('/users', function (req,res, next) {
    connection.query(
        'SELECT * FROM users',
        function (err, results, fields) {
            res.json(results)
        }
    )
})


//------------------------
console.log("Server is running on port 3000 | visit: http://localhost:3000/")
app.listen(process.env.PORT || 3000)
