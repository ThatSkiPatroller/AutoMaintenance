const mongoose = require('mongoose');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;
const AppointmentSchema = new Schema({
  //this is reason for visit
  appointmentName: {
    type: String,
    trim: true,
  },
  date: {
    type: Date,
    trim: true,
    required: 'Date name is required',
  },
  time: {
    type: String,
    trim: true,
    required: 'Address is required',
  },
  //this is reason for visit
  dealerName: {
    type: String,
    trim: true,
  },
  dealerId: {
    type: String,
    trim: true,
  },
  dealerAddress: {
    type: String,
    trim: true,
  },
  dealerPhoneNo: {
    type: String,
    trim: true,
  },
  isOvernight: {
    type: String,
    trim: true,
  },
  isPickUp: {
    type: String,
    trim: true,
  },
  isDropOff: {
    type: String,
    trim: true,
  },
  userCreated: {
    type: Date,
    default: Date.now,
  },
  description: {
    type: String,
    trim: true,
  }
});

// This creates our model from the above schema, using mongoose's model method
const Appointment = mongoose.model('Appointment', AppointmentSchema);

// Export the Appointment model
module.exports = Appointment;
