const express = require("express")
const router = express.Router()
const Authmodel = require('../Controller/Auth')
router.post('/register', Authmodel.Register)
router.get('/login', Authmodel.Login)
module.exports = router