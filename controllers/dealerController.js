const db = require('../models');

// Defining methods for the symptomsController
module.exports = {
  findAll: function (req, res) {
      db.User
          .find(req.query)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
  },
};