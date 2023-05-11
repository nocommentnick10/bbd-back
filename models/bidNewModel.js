const db = require('./../config/db')

class BidNew{
    constructor(name, phone){
        this.name = name
        this.phone = phone
    }

    async addBid(){
        const sql = `INSERT INTO bids (name, phone) values ('${this.name}', '${this.phone}')`

        try{
            const result = await db.query(sql)

            const msg = {
                message: 'Bid Created'
            }

            return msg
        } catch(err) {
            const msg = {
                message: 'Bid Not Created',
                errors: err
            }
        }
    }

}

module.exports = BidNew