const BidNew = require('./../models/bidNewModel')

exports.addBid = async (req, res, next) => {
    const {name, phone} = req.body
    console.log(name, phone)
    const bidObj = new BidNew(name, phone)
    const bidRes = await bidObj.addBid()

    res.json(bidRes)
}