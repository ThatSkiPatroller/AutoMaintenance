const router = require("express").Router();
const booksController = require("../../controller/bookingController");

// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.createBooking);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;
