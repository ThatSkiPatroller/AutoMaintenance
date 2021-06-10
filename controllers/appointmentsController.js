const db = require('../models/appointment');

// Defining methods for the appointmentsController
module.exports = {
  findAll: function(req, res) {
    console.log("niinn")
    
    db.Appointment.find({})
    .then(function (dbModel) {
      console.log("ftrt")
      res.json(dbModel);
    })
    .catch(function (err) {
      res.json(err);
    });

   /* db.Appointment
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));*/
  }

  /*findAll: function(req, res) {
      db.Appointment
          .findAll()
          .then(dbModel => {
            console.log(dbModel)
            res.json(dbModel)
          } )
          .catch(err => res.status(422).json(err));
  }*/
  ,
  create: function(req, res) {
      db.Appointment
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Appointment
      .findById(req.params.id)
      .then(dbModel => {
        console.log("ff")
        res.json(dbModel)
      } )
      .catch(err => console.log('the findbyid appointment is not working in appointmentscontroller.js error: ' + err));
    //res.status(422).json(err));
  },
  update: function(req, res) {
    db.Appointment
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log('the update appointment is not working in appointmentscontroller.js error: ' + err));
    //res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Appointment
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log('the remove appointment is not working in appointmentscontroller.js error: ' + err));
    //res.status(422).json(err));
  },
};
