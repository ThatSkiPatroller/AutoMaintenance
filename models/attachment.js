const mongoose = require('mongoose');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// new AttachmentSchema object for login purposes
const AttachmentSchema = new Schema({
  date: {
    type: Date,
    trim: true,
    required: 'Date is required',
  },
  // this is populated by dropdown
  Dealer: {
    type: String,
    trim: true,
    required: 'Dealer is required',
  },
  subject: {
    type: String,
    trim: true,
    required: 'Subject is required',
  },
  userCreated: {
    type: Date,
    default: Date.now,
  },
});

// This creates our model from the above schema, using mongoose's model method
const Attachment = mongoose.model('Attachment', AttachmentSchema);

// Export the Attachment model
module.exports = Attachment;
