require('dotenv').config()
const mysql = require('mysql2')

const pool = mysql.createPool({
    host: 'kalinovne.ru',
    user: 'u1884314_root',
    database: 'u1884314_bbd',
    password: '12345678root'
})

module.exports = pool.promise()