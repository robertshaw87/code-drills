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
  var bestStock = {
    maxProfit: arr[1].high - arr[0].low,
    buyDate: arr[0].date,
    buyPrice: arr[0].low,
    sellDate: arr[1].date,
    sellPrice: arr[1].high
  };
  var currMin = {
    buyDate: arr[0].date,
    buyPrice: arr[0].low,
  }
  for (var i = 1; i < arr.length; i++){
    var currProfit = arr[i].high - currMin.buyPrice;
    if (currProfit > bestStock.maxProfit) {
      bestStock.maxProfit = currProfit;
      bestStock.buyDate = currMin.buyDate;
      bestStock.buyPrice = currMin.buyPrice;
      bestStock.sellDate = arr[i].date;
      bestStock.sellPrice = arr[i].high;

    }
    if (arr[i].low < currMin.buyPrice) {
      currMin.buyDate = arr[i].date;
      currMin.buyPrice = arr[i].low;
    }
  }
  return bestStock;
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
