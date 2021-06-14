const router = require('express').Router();
const appointmentRoutes = require('./appointments');
const carRoutes = require('./car');
const dealerRoutes = require('./dealer');

module.exports = function(passport){
    router.use('/cars', carRoutes());

    // Appointments
    router.use('/appointments', appointmentRoutes());

    router.use('/dealers', dealerRoutes());

    return router;
}

