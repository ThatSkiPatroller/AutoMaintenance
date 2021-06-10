const router = require('express').Router();
const path = require('path');
const apiRoutes = require('./api');
const Auth = require('./api/Auth');
const htmlRoutes = require('./htmlRoutes');

// a function which takes a passport and returns a router
module.exports = function(passport, User) {
  router.use('/api', apiRoutes);
  router.use('/Auth', Auth(passport, User)); 
  
  router.use((req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
  return router
}

