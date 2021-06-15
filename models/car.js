const mongoose = require('mongoose');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

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
  carMileage: {
    type: String,
    trim: true,
    required: 'Mileage is required',
  },
  carYear: {
    type: String,
    trim: true,
    required: 'Year is required',
  },
  lastMaintainanceDate: {
    type: String,
    trim: true,
  },
  userId: {
    type: String,
    trim: true,
  },
});

// This creates our model from the above schema, using mongoose's model method
const Car = mongoose.model('Car', carSchema);

module.exports = Car;
