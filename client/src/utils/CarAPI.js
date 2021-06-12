import axios from 'axios';

export default {
  // Gets all Cars
  getCars() {
    return axios.get('/api/Cars');
  },
  // Saves a Car to the database
  saveCar(CarData) {
    console.log(CarData)
    return axios.post('/api/Cars', CarData);
  },
  // get a specific Car's id
  getCar(id) {
    return axios.get(`/api/Cars/${id}`);
  },
  // Deletes the Car with the given id
  deleteCar(id) {
    return axios.delete(`/api/Cars/${id}`);
  },
  // update a Car in the database
  updateCar(id) {
    return axios.put(`/api/Cars/${id}`);
  },
};
