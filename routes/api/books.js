const router = require("express").Router();
const appointmentController = require("../../controllers/appointmentsController");

// Matches with "/api/books"
router.route("/")
    .get(appointmentController.findAll)
    //.post(booksController.create);

module.exports = router;