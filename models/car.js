const mongoose = require('mongoose');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// new prescriptionSchema object for saving prescriptions.
const carSchema = new Schema({
  carName: {
    type: String,
    trim: true,
    required: 'Car Name is required.',
  },
  carMake: {
    type: String,
    trim: true,
    required: 'Make is required',
  },
  carModel: {
    type: String,
    trim: true,
    required: 'Make is required',
  },
  lastMaintainanceDate: {
    type: String,
    trim: true,
  },
});

// This creates our model from the above schema, using mongoose's model method
const Car = mongoose.model('Car', carSchema);

// Export the PrescriptionList model
module.exports = Car;
