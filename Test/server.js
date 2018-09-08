// Declare our dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Setting up express
var app = express();
var PORT = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Declaring our initial students
var students = [
  {
    id: 0,
    name: "Harry Potter",
    house: "Gryffindor",
    skills: []
  },{
    id: 1,
    name: "Luna Lovegood",
    house: "Ravenclaw",
    skills: []
  },{
    id: 2,
    name: "Ernie MacMillan",
    house: "Hufflepuff",
    skills: []
  }
]
// Declaring a counter to keep track of the current ID for new students
var idCounter = 3;

// Serving the HTML
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "add.html"));
});

app.get("/learn", function(req, res) {
  res.sendFile(path.join(__dirname, "learn.html"));
});


// Getting all the students
app.get("/api/students/all", function(req, res) {
  return res.json(characters);
});

// Getting a specific student
app.get("/api/students/:id", function (req, res) {
  var id = parseInt(req.params.id);
  var currentStudent;
  for (var i = 0; i <= id; i++) {
    currentStudent = students[i];
    if (currentStudent) {
      if (currentStudent.id === id) {
        return res.json(currentStudent)
      }
    }
  }
  return null;
});

// Adding a new student
app.post("/api/students/add", function(req, res) {
  var newStudent = {
    id: idCounter,
    name: req.body.name,
    house: req.body.house,
    skills: []
  };
  idCounter++;
  students.push(newStudent);
  res.json(newStudent);
});

// Adding new skills to a student
app.put("/api/students/:id/learn", function (req, res) {
  var id = parseInt(req.params.id);
  var currentStudent;
  for (var i = 0; i <= id; i++) {
    currentStudent = students[i];
    if (currentStudent) {
      if (currentStudent.id === id) {
        if (!currentStudent.skills.includes(req.body.skills)){
          currentStudent = currentStudent.skills.push(req.body.skills);
        }
        return res.json(currentStudent);
      }
    }
  }
  return null;
})

// Removing a student
app.delete("/api/students/:id", function (req, res) {
  var id = parseInt(req.params.id);
  var currentStudent;
  for (var i = 0; i <= id; i++) {
    currentStudent = students[i];
    if (currentStudent) {
      if (currentStudent.id === id) {
        students.splice(i, 1);
        break;
      }
    }
  }
  return res.json(currentStudent)
})

// Start the server listening on the designated port
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});