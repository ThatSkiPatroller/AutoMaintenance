const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes');
const User = require('./models/User')

// Server will use port 3001.
const PORT = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Require all models
const db = require('./models');

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}
// Route for retrieving all Users from the db
mongoose.connect(process.env.MONGODB_URI);
//var MONGODB_URI = process.env.MONGODB_URI;
var MONGODB_URI = process.env.MONGODB_URI;
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
  useMongoClient: true
});

// configurePassport
const configurePassport = require('./controllers/passport')
const passport = configurePassport(app, mongoose, User)

app.use(routes(passport, User));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});
app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});