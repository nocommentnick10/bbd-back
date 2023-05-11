const express = require('express')
const itemsInfoController = require('./../controllers/itemsInfoController')

const router = express.Router()

router.route('/').get(itemsInfoController.getItemsInfo)

module.exports = router