var mysql = require("mysql");

var connection = mysql.createConnection({
  // Your connection information here
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "stockDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected")
  getStocks();
});


// --------------------------------------------------------
//                Helper Functions (Optional)
//
// -------------------- Your Code Here --------------------

function maxProfit(arr){

}

// --------------------- End Code Area --------------------



// getStocks queries the SQL database and displays the days to buy and sell in order
// to maximize profits.
function getStocks() {

  // -------------------- Define Query Here --------------------
  var query = "SELECT date, high, low FROM stock";


  connection.query(query, function(err, res){
    // -------------------- Your Code Here --------------------

    console.log(maxProfit(res))

    // --------------------- End Code Area --------------------
    connection.end();
  })
}


// --------------------------------------------------------
//                Helper Functions (Optional)
//
// -------------------- Your Code Here --------------------

function maxProfit(arr){
  return arr;
}

// --------------------- End Code Area --------------------
