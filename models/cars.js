const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CarSchema = new Schema({
  userId: {
    type: String,
    trim: true,
  },
  model: {
    type: String,
    trim: true,
  },
  make: {
    type: Date,
    trim: true,
  },
  year: {
    type: String,
    trim: true,
  },
});

const Cars = mongoose.model('cars', CarSchema);
module.exports = Cars;