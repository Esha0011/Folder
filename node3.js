/* DELETING RECORD */


var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "WTEmployee"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "DELETE FROM EmployeeDetails WHERE ID = '19IT122'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
  });
});