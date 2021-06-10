const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./appointments");

router.use("/appointments", apiRoutes);

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;