/*
const router = require("express").Router();
const appointmentsController = require("../../controllers/appointmentsController");
const isAuthenticated = require('../isAuthenticated')
const { Appointment } = require("../../models/appointment");


module.exports = function(){
  router.route("/")
    .get(appointmentsController.findAll)
    .post(appointmentsController.create)

  // Matches with "/api/appointments/:id"
  router.route("/:id")
    .get(isAuthenticated, appointmentsController.findById)
    .put(appointmentsController.update)
    .delete(appointmentsController.remove);
  return router;
}
*/
var path = require("path");

module.exports = function(app){

  //===  API call to show index.html ==//
  app.get("/", (req, res)=>{
    console.log(`im notes`);
    res.sendFile(path.join(__dirname, "../public/index.html"))
  })
  
  //===  API call to show notes.html ==//
  app.get("/notes", (req, res) => {
    console.log(`im notes`);
    res.sendFile(path.join(__dirname, "../public/notes.html"))
  })
}
