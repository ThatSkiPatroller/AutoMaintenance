const db = require("../models/bookingModel");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.booking
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.booking
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createBooking: function(req, res) {
    console.log("inn booking")
    
    db.booking
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
  
};
