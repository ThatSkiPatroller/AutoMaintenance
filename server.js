


const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');
const bookingController = require('./controller/bookingController')
const router = express.Router()
const routes = require("./routes");
const userroutes = require("./routes/userRoute");

app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(routes);
app.use(userroutes);
router.use(userroutes);


// Define middleware here
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }
  // Add routes, both API and view
  app.use(routes);
mongoose.connect(process.env.MONGODB_URI || mongoose.connect('mongodb://localhost/automaintainance'))


app.listen(3001, function () {
    console.log('express server is running on port 3001');
})




const PORT = process.env.PORT || 3001;



// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/automaintainance");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
