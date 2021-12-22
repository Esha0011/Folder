var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "WTEmployee"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT name, ID FROM EmployeeDetails", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});