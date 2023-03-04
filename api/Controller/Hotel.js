const Hotelmodel = require("../Models/Hotel")
class Hotel {
    static NewHotel = async(req, res) => {
        try {
            let newHotel = await new Hotelmodel(
                req.body
            )
            await newHotel.save()
            res.send(newHotel)
        } catch (error) {
            res.send({
                apiStatus: false,
                message: error.message
            })
        }
    }

    static UpdateHotel = async(req, res) => {
        try {
            let updated = await Hotelmodel.findByIdAndUpdate(
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

    static DeleteHotel = async(req, res) => {
        try {
            const deletehotel = await Hotelmodel.findByIdAndDelete(
                req.params.id
            )
            res.send(deletehotel)
        } catch (error) {
            res.send({
                apiStatus: false,
                message: error.message
            })
        }
    }

    static Findone = async(req, res) => {
        try {
            let getHotel = await Hotelmodel.findById(
                req.params.id
            )
            res.send(getHotel)
        } catch (error) {
            res.send({
                apiStatus: false,
                message: error.message
            })
        }
    }

    static Getall = async(req, res) => {
        try {
            let getall = await Hotelmodel.find()
            res.send(getall)
        } catch (error) {
            res.send({
                apiStatus: false,
                message: error.message
            })
        }
    }
}
module.exports = Hotel