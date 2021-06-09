const router = require('express').Router();
const appointmentRoutes = require('./appointments');


module.exports = function(passport){
    // Appointments
    router.use('/appointments', appointmentRoutes());
    return router;
}

