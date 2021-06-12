const router = require('express').Router();
const appointmentRoutes = require('./appointments');
c
const carRoutes = require('./car');

module.exports = function(passport){
    // Symptoms 
    router.use('/cars', carRoutes());

    // Appointments
    router.use('/appointments', appointmentRoutes());

    
    return router;
}

// const router = require('express').Router();
// const symptomRoutes = require('./symptoms');
// const appointmentRoutes = require('./appointments');
// const doctorRoutes = require('./doctors');
// const clinicRoutes = require('./clinics');
// const logRoutes = require('./logs');
// const prescriptionRoutes = require('./prescriptions');

// // Symptoms 
// router.use('/symptoms', symptomRoutes);

// // Appointments
// router.use('/appointments', appointmentRoutes);

// // Doctors
// router.use('/doctors', doctorRoutes);

// // Logs
// router.use('/logs', logRoutes);

// // Clinics
// router.use('/clinics', clinicRoutes);

// // Prescriptions
// router.use('/prescriptions', prescriptionRoutes);

// module.exports = router;