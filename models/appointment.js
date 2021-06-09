const mongoose = require('mongoose');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// more about RegEx Patterns here https://www.regexbuddy.com/regex.html

// To create an appointment, we will require the following: date, time
// Dealer, clinic, and name of appointment.
// new AppointmentSchema object for login purposes
const AppointmentSchema = new Schema({
  userId: {
    type: String,
    trim: true,
  },
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
    required: 'Time is required',
  },
});

// This creates our model from the above schema, using mongoose's model method
const Appointment = mongoose.model('Appointment', AppointmentSchema);

// Export the Appointment model
module.exports = Appointment;
