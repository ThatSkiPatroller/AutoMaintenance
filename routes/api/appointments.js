//these are required
const router = require("express").Router();
const appointmentsController = require("../../controllers/appointmentsController");
const isAuthenticated = require('../isAuthenticated')
const { Appointment } = require("../../models/appointment");

/*
module.exports = function(passport){
  router.route("/")
    .get(isAuthenticated, appointmentsController.findAll)
    .post(appointmentsController.create);

  // Matches with "/api/appointments/:id"
  router.route("/:id")
    .get(isAuthenticated, appointmentsController.findById)
    .put(appointmentsController.update)
    .delete(appointmentsController.remove);

  return router;
}
*/

module.exports = function(passport, Appointment){
  router.post('/', (req, res) => {
    console.log('mmm')
    var newAppointment = new Appointment({
      appointmentName: req.body.appointmentName,
      date: req.body.date,
      time: req.body.time,
      dealerId: req.body.dealerId,
      userId: req.body.userId
    });
    console.log("appointment is " + newAppointment);
    Appointment
      .save()
      .then(data => {
        res.json("everything is good");
      })
      .catch(err => res.json(err));
    // res.redirect('/');


  });

}
