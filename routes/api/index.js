const router = require("express").Router();
const bookRoutes = require("./booking");

// Book routes
router.use("/booking", bookRoutes);

module.exports = router;
