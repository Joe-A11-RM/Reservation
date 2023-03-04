const jwt = require("jsonwebtoken")
const { model } = require("mongoose")
class Verfiy {
    static verifytoken = async(req, res, next) => {
        const token = req.cookies.access_token
        if (!token) {
            throw new Error("You are not Authorized")
        }
        jwt.verify(token, process.env.JWT, (err, user) => {
            if (err) {
                throw new Error("Token not valid")
            }
            req.user = user
            next()
        })
    }

    static verfiyuser = async(req, res, next) => {
        this.verifytoken(req, res, next, () => {
            if (req.user.id === req.params.id || req.user.isAdmin) {
                res.send("Welcome User You are logged in")
                next()
            } else {
                throw new Error("You are not authorized")
            }
        })
    }

    static verfiyadmin = async(req, res, next) => {
        this.verifytoken(req, res, next, () => {
            if (req.user.isAdmin) {
                res.send("Welcome Admin You are logged in")
                next()
            } else {
                throw new Error("You are not authorized")
            }
        })
    }
}
module.exports = Verfiy