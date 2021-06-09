//controller for Dealers
const db = require('../models');

// Defining methods for the DealersController
module.exports = {
  findAll: function (req, res) {
    db.Dealer
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log('the findall Dealer is not working in Dealerscontroller.js error: ' + err));
        //res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Dealer
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log('the findbyid Dealer is not working in Dealerscontroller.js error: ' + err));
        //res.status(422).json(err));
  },
  create: function (req, res) {
    db.Dealer
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => 
        console.log('the create Dealer is not working in Dealerscontroller.js error: ' + err));
        //res.status(422).json(err));
  },
  update: function (req, res) {
    db.Dealer
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log('the update Dealer is not working in Dealerscontroller.js error: ' + err));
        //res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Dealer
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log('the remove Dealer is not working in Dealerscontroller.js error: ' + err));
        //res.status(422).json(err));
  }
};
