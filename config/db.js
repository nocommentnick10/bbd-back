require('dotenv').config()
const mysql = require('mysql2')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'bbd',
    password: ''
})

module.exports = pool.promise()