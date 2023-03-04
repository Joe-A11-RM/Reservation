const Usermodel = require("../Models/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config();
class Auth {
    static Register = async(req, res) => {
        try {
            let newuser = await new Usermodel(req.body)
            await newuser.save()
            res.send(newuser)
        } catch (error) {
            res.send({
                apiStatus: false,
                message: error.message
            })
        }
    }

    static Login = async(req, res) => {
        try {
            let login = await Usermodel.findOne({ name: req.body.name })
            if (!login) {
                throw new Error("User name not exist")
            }
            var password = await bcrypt.compare(req.body.password, login.password)
            if (!password) {
                throw new Error("Wrong Password")
            }
            const token = jwt.sign({ id: login._id, isAdmin: login.isAdmin }, process.env.JWT)
            res.cookie("access_token", token, { httpOnly: true }).send(login)
        } catch (error) {
            res.send({
                apiStatus: false,
                message: error.message
            })
        }
    }
}
module.exports = Auth