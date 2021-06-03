const express = require('express');
const router = express.Router();
const Users = require('../models/userModel')

router.route('/create').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const newUser = new Users({
        username,
        password,
        email
    })

    newUser.save();
})

router.route('/users').get((req, res) => {
    Users.find()
    .then(foundUser =>res.json(foundUser))
})

module.exports = router;