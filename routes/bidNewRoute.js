const express = require('express')
const bidNewController = require('./../controllers/bidNewController')

const router = express.Router()

router.route('/').post(bidNewController.addBid)

module.exports = router