const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

router.route('/api/booking').post((req, res) => {
    console.log("inn pos")
}
/*
// If no API routes are hit, send the React app
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/public/index.html"));
});
*/

module.exports = router;