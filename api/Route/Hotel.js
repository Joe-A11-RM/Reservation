const express = require("express")
const router = express.Router()
const Hotel = require("../Controller/Hotel")
const { verfiyadmin } = require("../utils/verfiytoken")
const verify = require("../utils/verfiytoken")
router.post('/addhotel', verfiyadmin, Hotel.NewHotel)
router.put('/updatehotel/:id', verfiyadmin, Hotel.UpdateHotel)
router.delete('/deletehotel/:id', verfiyadmin, Hotel.DeleteHotel)
router.get('/findone/:id', Hotel.Findone)
router.get('/getall', Hotel.Getall)
module.exports = router