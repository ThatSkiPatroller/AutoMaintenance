import axios from 'axios';

export default {
  // Gets all Cars
  getdealers() {
    return axios.get('/api/dealers');
  },
};
