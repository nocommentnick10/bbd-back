const db = require('./../config/db')

class Bids{
    constructor(){

    }

    async getBids(){
        const sql = `SELECT * FROM bids`

        const result = await db.execute(sql)

        return result[0]
    }

}

module.exports = Bids