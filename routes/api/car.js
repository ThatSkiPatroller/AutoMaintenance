//these are required
const router = require("express").Router();
const carController = require("../../controllers/carController");
const isAuthenticated = require('../isAuthenticated')

module.exports = function(passport){
  // Matches with "/api/appointments"
  router.route("/")
    .get(isAuthenticated, carController.findAll)
    .post(carController.create);

  // Matches with "/api/appointments/:id"
  router.route("/:id")
    .get(isAuthenticated, carController.findById)
    .delete(carController.remove);

  return router;
}

