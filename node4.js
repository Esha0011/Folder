/* UPDATING RECORD */

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "WTEmployee"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "UPDATE EmployeeDetails SET ID = '19IT122' WHERE name = 'Ebby'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
});