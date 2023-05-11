const ItemsInfo = require("../models/itemsInfoModel")

exports.getItemsInfo = async (req, res, next) => {
    const itemsInfoObj = new ItemsInfo()

    const itemsInfoRes = await itemsInfoObj.gatherData()

    res.json(itemsInfoRes)

    res.send('Items Info')
}