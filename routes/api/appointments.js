//these are required
const router = require("express").Router();
const appointmentsController = require("../../controllers/appointmentsController");
const isAuthenticated = require('../isAuthenticated')
const { Appointment } = require("../../models/appointment");


module.exports = function(passport){
  router.route("/")
   // .get(isAuthenticated, appointmentsController.findAll)
    .get(appointmentsController.findAll)
    .post(appointmentsController.create);

  // Matches with "/api/appointments/:id"
  router.route("/:id")
    .get(isAuthenticated, appointmentsController.findById)
    .put(appointmentsController.update)
    .delete(appointmentsController.remove);

  return router;
}
