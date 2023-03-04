const express = require("express")
const router = express.Router()
const verify = require("../utils/verfiytoken")
const user = require("../Controller/User")
router.put('/updateuser/:id', verify.verfiyuser, user.Updateuser)
router.delete('/deleteuser/:id', verify.verfiyuser, user.Deleteuser)
router.get('/getuser/:id', verify.verfiyuser, user.Getuser)
router.get('/getall', verify.verfiyuser, user.Getall)
module.exports = router