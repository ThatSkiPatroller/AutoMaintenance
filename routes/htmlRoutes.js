module.exports = function(){
    // Matches with "/appointments"
    router.route("/")
      .get(appointmentsController.findAll)
      
    return router;
  }
  