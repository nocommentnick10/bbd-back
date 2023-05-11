const db = require('./../config/db')

class ItemsInfo {
    constructor(){

    }

    async gatherData(){
        let sql = `SELECT MIN(price_total) as min, MAX(price_total) as max FROM items`

        const minmaxTotal = await db.execute(sql)

        const priceMin = minmaxTotal[0][0].min
        const priceMax = minmaxTotal[0][0].max

        sql = `SELECT MIN(square) as min, MAX(square) as max FROM items`

        const minmaxSquare = await db.execute(sql)

        const sqareMin = minmaxSquare[0][0].min
        const squareMax = minmaxSquare[0][0].max

        sql = `SELECT DISTINCT items.complex_name, complex.complex_name FROM items INNER JOIN complex ON items.complex_name = complex.id`

        const complexData = await db.execute(sql)

        const complexNames = complexData[0].map(item => item.complex_name)

        sql = `SELECT DISTINCT rooms FROM items`

        const roomsData = await db.execute(sql)

        const roomValues = roomsData[0].map(item => item.rooms).sort()

        const result = {
            priceMin,
            priceMax,
            sqareMin,
            squareMax,
            complexNames,
            roomValues
        }

        return result
    }
}

module.exports = ItemsInfo