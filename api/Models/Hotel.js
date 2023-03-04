const mongoose = require('mongoose')
var Hotel = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    photos: {
        type: [String]
    },
    description: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 5
    },
    rooms: [{
        room: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Room",
            unique: true
        }
    }],
    cheapestPrice: {
        type: Number,
        required: true
    },
    featured: {
        type: Boolean,
        default: false
    },
}, { timestamps: true })
module.exports = mongoose.model("Hotel", Hotel)