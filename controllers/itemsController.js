const Items = require('./../models/itemsModel')

exports.getAllItems = async (req, res, next) => {
    if(req.query.complex || req.query.rooms || req.query.sqmin || 
        req.query.sqmax || req.query.pricemin || req.query.pricemax){
        const itemObj = new Items()

        let sql = `SELECT items.id, items.scu, items.title, items.complex_name, items.square, items.price_sq_m, items.price_total, items.building, items.floor, items.floors_total, items.rooms, items.flat_number, items.image, complex.complex_name, titles.title FROM (items INNER JOIN titles ON items.title = titles.id) INNER JOIN complex ON items.complex_name = complex.id WHERE `

        if(req.query.complex){
            sql += `complex.complex_name = '${req.query.complex}' AND `
        }

        if(req.query.rooms){
            rooms = req.query.rooms.split(',')
            sql += `rooms IN (${rooms}) AND `
        }

        if(req.query.sqmin){
            sql += `square >= ${req.query.sqmin} AND `
        }

        if(req.query.sqmax){
            sql += `square <= ${req.query.sqmax} AND `
        }

        if(req.query.pricemin){
            sql += `price_total >= ${req.query.pricemin} AND `
        }

        if(req.query.pricemax){
            sql += `price_total <= ${req.query.pricemax} AND `
        }

        let sqlNew = sql.slice(0, -4)

        sqlNew += 'ORDER BY id'

        const itemRes = await itemObj.filterItems(sqlNew)

        console.log(sqlNew)
        res.json(itemRes)
    } else if(req.query.ids){
        const itemObj = new Items()

        const itemsRes = await itemObj.getItemsByIds(req.query.ids)

        res.json(itemsRes)
    }else {
        const itemObj = new Items()

        const itemsRes = await itemObj.getAllItems()

        res.json(itemsRes)
    }
}

exports.getItemById = async (req, res, next) => {
    const itemObj = new Items()
    let itemId = req.params.id
    const itemRes = await itemObj.getItemById(itemId)

    res.json(itemRes)
}