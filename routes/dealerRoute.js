const express = require('express');
const dealers = require('../models/dealerModel');
const router = express.Router();

router.route('/dealer/create').post((req, res) => {
    console.log("inn cll")
    const name = req.body.name;
    const address = req.body.address;
    const phoneNo = req.body.phoneNo;
    const overNightAvailable = req.body.overNightAvailable;
    const pickUp = req.body.pickUp;
    const dropOff = req.body.dropOff;
    const username = req.body.username;
    const password = req.body.password;

    const newDealer = new dealers({
        username,
        password,
        name,
        address,
        phoneNo,
        pickUp,
        dropOff,
        overNightAvailable
    })
    console.log(newDealer)
    newDealer.save();
})

router.route('/dealerList').get((req, res) => {
    dealers.find()
    .then(foundUser =>res.json(foundUser))
})

module.exports = router;