const express = require('express')
require('dotenv').config()
const session = require('express-session')
const mysql = require('mysql2')
const MySQLSession = require('express-mysql-session')(session)

const PORT = 8080

const app = express()

app.use(express.json())

app.use('/itemsinfo', require('./routes/itemsInfoRoute'))
app.use('/items', require('./routes/itemsRoute'))
app.use('/bids', require('./routes/bidsRoute'))
app.use('/bidnew', require('./routes/bidNewRoute'))

app.get('/', (req, res) => {
    res.send('Hello')
})

app.listen(PORT, () => { console.log(`Server is running at port ${PORT}`) })
