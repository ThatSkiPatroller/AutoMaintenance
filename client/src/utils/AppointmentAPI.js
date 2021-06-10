import axios from 'axios';

export default {
  // Gets all appointments
  findAppointments : function(){
    return axios.get("/api/books");
  },


  getAppointments() {
    console.log('in get appot ')
    return axios.get('/api/appointments');
  },
  // Saves an appointment to the database
  saveAppointment(appointmentData) {
    console.log(appointmentData)
    return axios.post('/api/appointments', appointmentData);
  },
  // get a specific appointment's id
  getAppointment(id) {
    return axios.get(`/api/appointments/${id}`);
  },
  deleteAppointment(id) {
    return axios.delete(`/api/appointments/${id}`);
  },
  updateAppointment(id) {
    return axios.put(`/api/appointments/${id}`);
  },
};
