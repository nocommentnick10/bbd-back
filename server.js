const express = require('express')
require('dotenv').config()
const mysql = require('mysql2')

const PORT = 8080

const app = express()

app.use(express.json())

app.use('/itemsinfo', require('./routes/itemsInfoRoute'))
app.use('/items', require('./routes/itemsRoute'))
app.use('/bids', require('./routes/bidsRoute'))
app.use('/bidnew', require('./routes/bidNewRoute'))

app.get('/', (req, res) => {
    res.send('<a href="itemsinfo">/itemsinfo</a> <br> <a href="items">/items</a> <br> <a href="items/5">/items/id</a> <br> <a href = "/items?complex=Речной&rooms=2,3&sqmin=40&sqmax=90&pricemin=2325000&pricemax=4525000">/items?filter</a> <br> <a href="bids">/bids</a> <br> POST /bidnew')
})

app.listen(PORT, () => { console.log(`Server is running at port ${PORT}`) })
