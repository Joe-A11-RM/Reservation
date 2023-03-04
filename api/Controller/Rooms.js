const Hotel = require("../Models/Hotel")
const Roommodel = require("../Models/Room")
class Room {
    static Createroom = async(req, res) => {
        try {
            /*let newroom = await new Roommodel(req.body)
            await newroom.save()
            console.log(newroom._id)
            let hotel = await Hotel.findById(req.params.id)
            await hotel.save()
            if (hotel) {
                let isFound = hotel.rooms.filter((e => e.room == req.body.roomId)) //newroom.id
                console.log(isFound);

                if (isFound.length != 0) {
                    throw new Error("room already added")
                } else {
                    await hotel.rooms.push({ room: req.body.roomId })
                    await hotel.save()
                }
            }
            res.send(hotel)*/
            let newroom = await new Roommodel(req.body)
            await newroom.save()
            let hotel = await Hotel.findById(req.params.id)
            if (hotel) {
                hotel.rooms.push({ room: newroom.id })
                await hotel.save()
            } else {
                res.send("Hotel Not found")
            }
            res.send(newroom)
        } catch (error) {
            res.send({
                apiStatus: false,
                message: error.message
            })
        }
    }

    static UpdateRoom = async(req, res) => {
        try {
            let updated = await Roommodel.findByIdAndUpdate(
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

    static DeleteRoom = async(req, res) => {
        try {
            const deletehotel = await Roommodel.findByIdAndDelete(
                req.params.roomid
            )


            const hotel = await Hotel.findById(req.params.hotelid)
                //console.log(req.params.hotelid)
            console.log(hotel.rooms.length)
                // for (var x of hotel.rooms) {
                //     console.log(x.room)
                // }
            for (var i = 0; i <= hotel.rooms.length; i++) {
                await hotel.rooms.splice(i - 1, 1)
                console.log(hotel.rooms)
                await hotel.save()
                await deletehotel.save()
            }
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
            let getRoom = await Roommodel.findById(
                req.params.id
            )
            res.send(getRoom)
        } catch (error) {
            res.send({
                apiStatus: false,
                message: error.message
            })
        }
    }

    static Getall = async(req, res) => {
        try {
            let getall = await Roommodel.find()
            res.send(getall)
        } catch (error) {
            res.send({
                apiStatus: false,
                message: error.message
            })
        }
    }
}
module.exports = Room