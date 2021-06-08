const mongoose = require('mongoose');

const bookingSchema = {
    userId: String,
    dealerId: String,
    startTime: String,
    endTime: String,
    date: String,
    isOvernight: Boolean
}

const bookings = mongoose.model('booking', bookingSchema)

module.exports = bookings;