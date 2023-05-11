const db = require('./../config/db')

class Items {
    constructor(){

    }

    async getAllItems(){
        let sql = `SELECT items.id, items.scu, items.title, items.complex_name, items.square, items.price_sq_m, items.price_total, items.building, items.floor, items.floors_total, items.rooms, items.flat_number, items.image, complex.complex_name, titles.title FROM (items INNER JOIN titles ON items.title = titles.id) INNER JOIN complex ON items.complex_name = complex.id ORDER BY items.id`

        const allItems = await db.execute(sql)

        return allItems[0]
    }

    async getItemById(id){
        try{
            if(id>0 && id <19){
                let sql = `SELECT items.id, items.scu, items.title, items.complex_name, items.square, items.price_sq_m, items.price_total, items.building, items.floor, items.floors_total, items.rooms, items.flat_number, items.image, complex.complex_name, titles.title FROM (items INNER JOIN titles ON items.title = titles.id) INNER JOIN complex ON items.complex_name = complex.id WHERE items.id = ${id}`
    
                const items = await db.execute(sql)
    
                return items[0][0]
            } else {
                return {}
            }
        } catch(err){
            console.log(err)
            return []
        }
    }

    async getItemsByIds(ids){
        ids = ids.split(',')

        let sql = `SELECT items.id, items.scu, items.title, items.complex_name, items.square, items.price_sq_m, items.price_total, items.building, items.floor, items.floors_total, items.rooms, items.flat_number, items.image, complex.complex_name, titles.title FROM (items INNER JOIN titles ON items.title = titles.id) INNER JOIN complex ON items.complex_name = complex.id WHERE items.id IN (${ids})`
    
        const items = await db.execute(sql)

        return items[0]
    }

    async filterItems(sql){
        const result = await db.execute(sql)

        return result[0]
    }
}

module.exports = Items