const mongoose = require('mongoose');

const dealerSchema = {
    username: String,
    password: String,
    name: String,
    address: String,
    phoneNo: String,
    pickUp: Boolean,
    dropOff: Boolean,
    overnightAvailable: Boolean
}

const dealers = mongoose.model('dealer', dealerSchema)

module.exports = dealers;