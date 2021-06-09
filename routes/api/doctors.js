//these are required
const router = require("express").Router();
const DealersController = require("../../controllers/DealersController");
const isAuthenticated = require('../isAuthenticated')

module.exports = function(passport){
  // Matches with "/api/Dealers"
  router.route("/")
    .get(isAuthenticated, DealersController.findAll)
    .post(DealersController.create);

  // Matches with "/api/Dealers/:id"
  router.route("/:id")
    .get(DealersController.findById)
    .put(DealersController.update)
    .delete(DealersController.remove);

  return router;
}

  
// // Matches with "/api/Dealers"
// router.route("/")
//   .get(DealersController.findAll)
//   .post(DealersController.create);

// module.exports = router;

