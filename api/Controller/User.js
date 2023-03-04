const Usermodel = require("../Models/User")
class User {
    static Updateuser = async(req, res) => {
        try {
            let updated = await Usermodel.findOneAndUpdate(
                req.params.id, { $set: req.body }, { new: true }
            )
            res.send(updated)
        } catch (error) {
            res.send({
                apiStatus: false,
                message: error.message
            })
        }
    }

    static Deleteuser = async(req, res) => {
        try {
            let deleted = await Usermodel.findOneAndDelete(req.params.id)
            res.send(deleted)
        } catch (error) {
            res.send({
                apiStatus: false,
                message: error.message
            })
        }
    }

    static Getuser = async(req, res) => {
        try {
            let getone = await Usermodel.findById(req.params.id)
            res.send(getone)
        } catch (error) {
            res.send({
                apiStatus: false,
                message: error.message
            })
        }
    }

    static Getall = async(req, res) => {
        try {
            let getall = await Usermodel.find()
            res.send(getall)
        } catch (error) {
            res.send({
                apiStatus: false,
                message: error.message
            })
        }
    }
}
module.exports = User