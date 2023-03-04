const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const emailvalidator = require('validator')
var Usermodel = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validator(val) {
            if (!emailvalidator.isEmail(val)) {
                throw new Error("Not Email")
            }
        }
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

Usermodel.pre('save', async function(next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 8)
    }
})

module.exports = mongoose.model("User", Usermodel)