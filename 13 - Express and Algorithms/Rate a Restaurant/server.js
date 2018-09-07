// ======================= NPM ========================
// Require the following packages:
// - express, to create our server and manage our routes 
// - body-parser, to read our API returns more easily 
// - path, to use HTMl files
// - mysql, to query our db 




 // ===================================================
//Initialize express
var app = express()
// Set the PORT to listen at 3002
var PORT = 3002

// Configure your database with your own settings
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "restaurantsDB"
})

// Connects to the db
connection.connect(function(err) {
  if (err) throw err
})
// Configures Body Parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//Serve up static assets from the public folder. Our CSS and JS links won't work without this line of code
app.use(express.static("public"));

//======================== HTML ========================

// At the root route, render index.html

// At /add render add.html


 // ===================================================


 // ====================== API ==========================


// Create a GET route at /api/restaurants. This route should query our db, and retrieve all the restaurants and their corresponding data 

//Create a POST route at /api/restaurants/new. This route should insert a new restaurant into our db. 


 //Create a PUT route at "/api/restaurants/:id/rating/:value". This route will update the rating (value) of a restaurant at id


  // ===================================================



app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT)
})

