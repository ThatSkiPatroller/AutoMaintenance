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