// To create our server and manage our routes
var express = require("express");
// To read our API returns more easily
var bodyParser = require("body-parser")
// TO use HTMl files
var path = require("path")
// To query our db
var mysql = require("mysql");

var app = express()
var PORT = 3002

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  user: "root",

  password: "",
  database: "restaurantsDB"

})

connection.connect(function(err) {
  if (err) throw err
})

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
//Serve up static assets from public
app.use(express.static("public"));

//======================== HTML ========================

 app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"))
 })

 app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/add.html"))
 })


 // ===================================================


 // ====================== API ==========================

 //Get all restaurants
 app.get("/api/restaurants", function(req, res) {

  connection.query("SELECT * FROM restaurants", function(err, response) {
    return res.json(response)
  })

 })

//Create new restaurant
 app.post("/api/restaurants/new", function(req, res) {

  var restaurant = req.body
  connection.query("INSERT INTO restaurants SET ?", restaurant)

 })

 //Update restaurant rating
 app.put("/api/restaurants/:id/rating/:value", function(req, res) {
  
console.log(req.params.id, req.params.value)
  connection.query("UPDATE restaurants SET rating = ? WHERE restaurant_id = ?", [req.params.value,req.params.id])

 })

  // ===================================================



app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT)
})

