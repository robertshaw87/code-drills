var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "boa_stockDB"
});

connection.connect(function(err) {
  if (err) throw err;
  getStocks();
});


function getStocks() {
  var query = "";
  connection.query(query, function(err, res){
    
  })
}

function maxProfit(arr){

}