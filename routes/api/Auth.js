const router = require("express").Router();
// const passport = require('passport');


module.exports = function(passport, User){
  router.get('/', (req, res, next) => {
      res.json('req.user is: ' + req.user);
    });
    
    router.post(
      '/login',
      passport.authenticate('local'),
      (req, res) => {
        console.log(req.user)
        res.json({message: "The user is logged in", userId: req.user._id})
      } 
    );
    
    router.post('/logout', (req, res) => {
      req.logout();
      res.json("signed out");
    });
    

    router.post('/signup', (req, res, next) => {
      var user = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        isDealer: false
      });
      console.log("user is " + user);
      user.save()
        .then(data => {
          res.json("Signup done");
        })
        .catch(err => res.json(err));
    });

    router.post('/dealer-signup', (req, res, next) => {
      var user = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        address: req.body.address,
        phoneNo: req.body.phoneNo,
        isPickUp: req.body.isPickUp,
        isDropOff: req.body.isDropOff,
        isOvernight: req.body.isOvernight,
        isDealer: true,
      });

      console.log("user is " + user);
      user.save()
        .then(data => {
          res.json("Signup done");
        })
        .catch(err => res.json(err));
    });

  return router;
}