// Exporting an object containing all of our models

module.exports = {
  User: require('./User'),
  Clinic: require('./clinic'),
  Dealer: require('./Dealer'),
  HealthLog: require('./healthlog'),
  Appointment: require('./appointment'),
  SymptomJournal: require('./symptom'),
  Prescription: require('./prescription'),
  //Code: require('./Code'),
  //Token: require('./token'),
  //Client: require('./Client'),
};
