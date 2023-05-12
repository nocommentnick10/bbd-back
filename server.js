const express = require('express')
require('dotenv').config()
const session = require('express-session')
const mysql = require('mysql2')
const MySQLSession = require('express-mysql-session')(session)

const PORT = 8080

const app = express()

app.use(express.json())

// const options = {
//     host: 'kalinovne.ru',
//     port: 3306,
//     user: 'u1884314_root',
//     password: '12345678root',
//     database: 'u1884314_bbd'
// }

// const sessionStore = new MySQLSession(options);

// app.use(session({
//     secret: 'key',
//     resave: false,
//     saveUninitialized: false,
//     store: sessionStore
// }))

// const isAuth = (req, res, next) => {
//     if(req.session.isAuth){
//         next()
//     } else {
//         res.redirect('/')
//     }
// }

// sessionStore.onReady().then(() => {
// 	// MySQL session store ready for use.
// 	console.log('MySQLStore ready');
// }).catch(error => {
// 	// Something went wrong.
// 	console.error(error);
// });

app.use('/itemsinfo', require('./routes/itemsInfoRoute'))
app.use('/items', require('./routes/itemsRoute'))
app.use('/bids', require('./routes/bidsRoute'))
app.use('/bidnew', require('./routes/bidNewRoute'))
// app.use('/auth', require('./routes/signInRoute'))

app.get('/', (req, res) => {
    res.send('Hello')
})

app.listen(PORT, () => { console.log(`Server is running at port ${PORT}`) })