const mongoose = require("mongoose")
var database = "HotelReservation"
var server = "127.0.0.1:27017"
class Database {
    connect() {
        mongoose.connect(`mongodb://${server}/${database}`, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => {
                console.log("Database Connected Successfully")
            }).catch(() => {
                console.log("Database Failed")
            })
    }
}
module.exports = new Database()