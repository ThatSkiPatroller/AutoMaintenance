const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes');
const User = require('./models/User')

var MongoClient = require('mongodb').MongoClient;

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





app.post('/api/appointments', function (req, res) {
  console.log('fdsfd')
  
  // Create a new Note in the db
  db.Appointment
  .create(req.body)
  .then(dbModel => res.json(dbModel))
  .catch(err => res.status(422).json(err));
});

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