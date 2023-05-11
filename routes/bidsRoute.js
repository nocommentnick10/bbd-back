const express = require('express')
const bidsController = require('./../controllers/bidsController')

const router = express.Router()

router.route('/').get(bidsController.getBids)

module.exports = router