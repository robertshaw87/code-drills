// Rate a restaurant server

// To create our server and manage our routes
var express = require("express");
// To read our API returns more easily
var bodyParser = require("body-parser")
// TO use HTMl files
var path = require("path")


// Initialize express and set our port to 3002
var app = express()
var PORT = 3002

// Make our app use bodyparser to access our requests
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
//Serve up static assets from public
app.use(express.static(__dirname + "/public"));


//======================== HTML ========================
// Serve up the index.html and add.html pages

 app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"))
 })

 app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/add.html"))
 })

 // ===================================================


 // Set up a listener on the designated port for our app
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT)
})

