

module.exports = function(){
  cpnsole.log('fdf')

    // Matches with "/appointments"
    router.get('/', (req, res) => {
      console.log('fdf')
      //res.json('req.user is: ' + req.user);
    //  get(appointmentsController.findAll)
        appointmentsController.findAll()
    });
      
    return router;
  }
  