const Bids = require('./../models/bidsModel')

exports.getBids = async (req, res, next) => {
    const bidsObj = new Bids()
    const bidsRes = await bidsObj.getBids()

    res.json(bidsRes)
}