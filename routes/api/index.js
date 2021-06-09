const router = require('express').Router();
const appointmentRoutes = require('./appointments');


module.exports = function(passport){
    // Appointments
    router.use('/appointments', appointmentRoutes());
    return router;
}

// const router = require('express').Router();
// const symptomRoutes = require('./symptoms');
// const appointmentRoutes = require('./appointments');
// const DealerRoutes = require('./Dealers');
// const clinicRoutes = require('./clinics');
// const logRoutes = require('./logs');
// const prescriptionRoutes = require('./prescriptions');

// // Symptoms 
// router.use('/symptoms', symptomRoutes);

// // Appointments
// router.use('/appointments', appointmentRoutes);

// // Dealers
// router.use('/Dealers', DealerRoutes);

// // Logs
// router.use('/logs', logRoutes);

// // Clinics
// router.use('/clinics', clinicRoutes);

// // Prescriptions
// router.use('/prescriptions', prescriptionRoutes);

// module.exports = router;