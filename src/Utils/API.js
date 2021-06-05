import axios from "axios";

const BASEURL = "https://api.nhtsa.gov/complaints/complaintsByVehicle?make=Hyundai&model=Sonata&modelYear=2008";
//const BASEURL = "https://randomuser.me/api/?results=20";
// Export an object with a "search" method that searches the Giphy API for the passed query
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  search: function() {
    return axios.get(BASEURL)
        .then(function (response) {
       console.log(response);
    });
    
    //axios.get(BASEURL);
  }
};