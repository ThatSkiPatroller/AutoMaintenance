const router = require("express").Router();
// const passport = require('passport');
var ls = require('local-storage');


module.exports = function(passport, User){
  router.get('/', (req, res, next) => {
      res.json('req.user is: ' + req.user);
    });
    
    router.post(
      '/login',
      passport.authenticate('local'),
      (req, res) => {
        console.log(req.user)
        ls.set('userId', req.user._id);
        //localStorage.setItem('userId', req.user._id);
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
        email: req.body.email
      });
      console.log("user is " + user);
      user
        .save()
        .then(data => {
          
          res.json("everything is good in signup");
        })
        .catch(err => res.json(err));
      // res.redirect('/');


    });

  return router;
}