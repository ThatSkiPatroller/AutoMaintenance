import axios from 'axios';

export default {
  // Gets all cars
  getCars() {
    console.log('in get car')
    return axios.get('/api/cars');
  },
  // Saves a car to the database
  saveCars(appointmentData) {
    console.log(appointmentData)
    return axios.post('/api/cars', appointmentData);
  },
  // Gets a specific car's id
  getCars(id) {
    return axios.get(`/api/cars/${id}`);
  },
  // Deletes a car with the given id
  deleteCar(id) {
    return axios.delete(`/api/cars/${id}`);
  },
  // Updates a car in the database
  updateCar(id) {
    return axios.put(`/api/cars/${id}`);
  },
};