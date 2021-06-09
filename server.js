const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes');
const User = require('./models/User')

var MongoClient = require('mongodb').MongoClient;
var MONGODB_URI = "mongodb://localhost/automaintainancedb";

const PORT = process.env.PORT || 3013;
// Yes, the app uses express.
const app = express();

// Configure body parser for axios requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Require all models
const db = require('./models');

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}


// // Add routes, both API and view
// app.use(routes);

// Route for retrieving all Users from the db
app.get('/user', function (req, res) {
  // Find all Users
  db.User.find({})
    .then(function (dbUser) {
      // If all Users are successfully found, send them back to the client
      res.json(dbUser);
    })
    .catch(function (err) {
      // If an error occurs, send the error back to the client
      res.json(err);
    });
});


// Route for saving a new Health Log to the db and associating it with a User
app.post('/submit', function (req, res) {
  // Create a new Note in the db
  db.healthLog.create(req.body)
    .then(function (dbHealthLog) {
       return db.User.findOneAndUpdate({}, { $push: { notes: dbHealthLog._id } }, { new: true });
    })
    .then(function (dbUser) {
      // If the User was updated successfully, send it back to the client
      res.json(dbUser);
    })
    .catch(function (err) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
});


app.post('/api/appointments', function (req, res) {
  console.log('fdsfd')
  
  // Create a new Note in the db
  db.Appointment
  .create(req.body)
  .then(dbModel => res.json(dbModel))
  .catch(err => res.status(422).json(err));
});

// Route to get all User's and populate them with their notes
app.get('/populateduser', function (req, res) {
  // Find all users
  db.User.find({})
    // Specify that we want to populate the retrieved users with any associated notes
    .populate('healthLog')
    .then(function (dbUser) {
      // If able to successfully find and associate all Users and Health Logs,
      // send them back to the client
      res.json(dbUser);
    })
    .catch(function (err) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
});

// Connect to the Mongo DB

// If deployed, use the deployed database. Otherwise use the local reacthealthtracker database

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;



// configurePassport
const configurePassport = require('./controllers/passport')

const passport = configurePassport(app, mongoose, User)

// Add routes, both API and view
app.use(routes(passport, User));
app.use(routes)

// Send every request to the React app
// Define any API routes before this runs
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});



mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost/automaintainancedb',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);





app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});