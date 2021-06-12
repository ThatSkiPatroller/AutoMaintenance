const router = require('express').Router();
const appointmentRoutes = require('./appointments');
const carRoutes = require('./car');

module.exports = function(passport){
    router.use('/cars', carRoutes());

    // Appointments
    router.use('/appointments', appointmentRoutes());

    
    return router;
}

